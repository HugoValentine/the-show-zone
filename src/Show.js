import React, { Component } from 'react';
import { API_URL, API_KEY } from './config';
import Navigation from './components/Navigation';
import ShowInfo from './components/ShowInfo';
import Actors from './components/Actors';
import Grid from './components/Grid';
import Spinner from './components/Spinner';

class Show extends Component {
  state = { loading: true };

  fetchData = async () => {
    const { showId } = this.props;
    this.setState({ loading: true, error: false });

    try {
      const endpoint = `${API_URL}tv/${showId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      const creditsEndpoint = `${API_URL}tv/${showId}/credits?api_key=${API_KEY}`;
      const creditsData = await (await fetch(creditsEndpoint)).json();
      console.log(creditsData);

      const directors = creditsData.crew.filter(
        (member) => member.job === 'Director'
      );
      this.setState(
        {
          ...result,
          actors: creditsData.cast,
          directors,
          loading: false,
        },
        () => {
          localStorage.setItem(showId, JSON.stringify(this.state));
        }
      );
    } catch (error) {
      this.setState({ error: true });
    }
  };

  componentDidMount() {
    const { showId } = this.props;
    if (localStorage[showId]) {
      this.setState(JSON.parse(localStorage[showId]));
    } else {
      this.fetchData();
    }
  }

  render() {
    const { original_name: originalName, actors, error, loading } = this.state;

    if (error) return <div>Something went wrong, it's not you, it's me</div>;
    if (loading) return <Spinner />;

    return (
      <>
        <Navigation show={originalName} />
        <ShowInfo show={this.state} />
        <Grid header="Actors">
          {actors.map((actor) => (
            <Actors key={actor.credit_id} actor={actor} />
          ))}
        </Grid>
      </>
    );
  }
}

export default Show;
