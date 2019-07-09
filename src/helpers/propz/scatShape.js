import Proptypes from 'prop-types';

const scatCardShape = Proptypes.shape({
  id: Proptypes.string.isRequired,
  location: Proptypes.string.isRequired,
  weight: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  sampleName: Proptypes.string.isRequired,
  animal: Proptypes.string.isRequired,
  uid: Proptypes.string.isRequired,
});

export default { scatCardShape };
