import React, { Component } from 'react';
import {
  SEARCH_ENDPOINT,
  SEARCH_POPULAR,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import ShowThumbnail from './ShowThumbnail';
import Spinner from './Spinner';
import LoadMore from './LoadMore';
import NoImage from '../assets/no-image.png';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';

class Home extends Component {
  state = {
    shows: [],
    searchTerm: '',
    loading: true,
    error: false,
    selectedItem: 'Popular',
  };

  fetchShows = async (endpoint) => {
    this.setState({ loading: true, error: false });

    const { searchTerm } = this.state;
    const isLoadingMore = endpoint.search('page');

    try {
      // 2 awaits because I first await the fetch itself and then await when parsed to json because that's also async
      const data = await (await fetch(endpoint)).json();
      this.setState(
        (prev) => ({
          ...prev,
          shows:
            isLoadingMore !== -1
              ? // append the new shows and keep the old ones in the state, otherwise wipe them and only show the new ones
                [...prev.shows, ...data.results]
              : [...data.results],
          heroImage: prev.heroImage || data.results[0],
          currentPage: data.page,
          totalPages: data.total_pages,
          loading: false,
        }),
        () => {
          if (!searchTerm) {
            console.log('Writing to session storage');
            sessionStorage.setItem('homeState', JSON.stringify(this.state));
          }
        }
      );
    } catch (error) {
      this.setState({ error: true });
    }
  };

  componentDidMount() {
    if (sessionStorage.homeState) {
      console.log('Grabbing from Session Storage');
      this.setState(JSON.parse(sessionStorage.homeState));
    } else {
      console.log('Grabbing from API|');
      this.fetchShows(SEARCH_POPULAR);
    }
  }

  searchShows = (search) => {
    const endpoint = search ? SEARCH_ENDPOINT + search : SEARCH_POPULAR;
    this.setState({ searchTerm: search });
    this.fetchShows(endpoint);
  };

  loadMoreShows = () => {
    const { searchTerm, currentPage } = this.state;
    const searchEndpoint = `${SEARCH_ENDPOINT}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${SEARCH_POPULAR}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    this.fetchShows(endpoint);
  };

  render() {
    const {
      searchTerm,
      heroImage,
      shows,
      currentPage,
      totalPages,
      loading,
      error,
      selectedItem = 'Popular',
    } = this.state;

    if (error) return <div>Something went wrong...</div>;
    if (!shows[0]) return <Spinner />;

    return (
      <>
        {/* <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_name}
          text={heroImage.overview}
        />  */}

        {/* <SearchBar callback={this.searchShows} /> */}
        <Sidebar
          selectedItem={selectedItem}
          onChange={(selectedItem) => this.setState({ selectedItem })}
        />
        <Grid header={searchTerm ? 'Search Result' : 'Popular Shows'}>
          {shows.map((show) => (
            <ShowThumbnail
              key={show.id}
              clickable
              image={
                show.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${show.poster_path}`
                  : NoImage
              }
              showId={show.id}
              showName={show.original_name}
            />
          ))}
        </Grid>
        {loading && <Spinner />}
        {currentPage < totalPages && !loading && (
          <LoadMore text="Load More" callback={this.loadMoreShows} />
        )}
      </>
    );
  }
}

export default Home;
