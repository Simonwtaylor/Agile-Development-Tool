import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { BacklogContainer } from '../components/backlog';

export interface IBacklogProps extends RouteComponentProps {

}
 
export interface IBacklogState {
  
}
 
class Backlog extends React.Component<IBacklogProps, IBacklogState> {
  constructor(props: IBacklogProps) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <>
        <h1>Backlog <span role="img" aria-label="backlog">📓</span></h1>
        <Grid padded>
          <Grid.Row>
            <Grid.Column>
              <BacklogContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

export default withRouter(Backlog);
