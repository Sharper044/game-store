import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { flowRight } from 'lodash';
import { connect } from 'react-redux';
import { getProducts } from '../../ducks/actions';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 700,
    marginTop: 10,
    marginBottom: 30,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  subheader: {
    width: '100%',
  },
});

class Landing extends React.Component {

  componentDidMount(){
    this.props.getProducts();
  }

  render() {
    const { classes, products } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <div className={classes.content}>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Welcome To
            </Typography>
            <Typography variant="h5" component="h2">
              Stuart Harper's Board Game Store!
            </Typography>
            <Typography component="p">
              Your one-stop store to get the top board games on the market.
            </Typography>
          </CardContent>
        </Card>
  
        <Typography variant="h5" component="h2">
          Check out our selection:
        </Typography>
  
        <div className={classes.root}>
          <GridList cellHeight={160} className={classes.gridList} cols={3}>
            {products.map((tile, i) => (
              <GridListTile key={tile.id} cols={(i === 0 || i === 6) ? 2 : 1}>
                <img src={tile.photo_url} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    products: state.products,
  }
};

export default flowRight([
  withStyles(styles),
  connect(mapStateToProps, { getProducts }),
])(Landing);
