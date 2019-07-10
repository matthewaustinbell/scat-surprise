import React from 'react';

import scatData from '../../helpers/data/scats';

import './EditScat.scss';

const defaultScat = {
  location: '',
  weight: '',
  color: '',
  sampleName: '',
  animal: '',
  uid: '',
};

class EditScat extends React.Component {
  state = {
    editScat: defaultScat,
  }

  formFieldStringState = (name, e) => {
    const tempScat = { ...this.state.editScat };
    tempScat[name] = e.target.value;
    this.setState({ editScat: tempScat });
  }

  sampleNameChange = e => this.formFieldStringState('sampleName', e);

  colorChange = e => this.formFieldStringState('color', e);

  weightChange = e => this.formFieldStringState('weight', e);

  locationChange = e => this.formFieldStringState('location', e);

  animalChange = e => this.formFieldStringState('animal', e);

formSubmit = (e) => {
  e.preventDefault();
  const saveMe = { ...this.state.editScat };
  const scatId = this.props.match.params.id;
  scatData.postScat(saveMe, scatId)
    .then(() => this.props.history.push('/home'))
    .catch(err => console.error('unable to save', err));
}

componentDidMount() {
  const scatId = this.props.match.params.id;
  scatData.getSingleScat(scatId)
    .then(scatPromise => this.setState({ editScat: scatPromise.data }))
    .catch(err => console.error('could not find single scat,err'));
}

render() {
  const { editScat } = this.state;
  return (
      <div className="EditScat">
        <h1>Edit Scat</h1>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <label htmlFor="sampleName">Sample Name</label>
            <input
              type="text"
              className="form-control"
              id="sampleName"
              placeholder="Sample 12"
              value={editScat.sampleName}
              onChange={this.sampleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="color">Color</label>
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="Brown"
              value={editScat.color}
              onChange={this.colorChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="12g"
              value={editScat.weight}
              onChange={this.weightChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="animal">Animal</label>
            <input
              type="text"
              className="form-control"
              id="color"
              placeholder="Bear"
              value={editScat.animal}
              onChange={this.animalChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              placeholder="NSS"
              value={editScat.location}
              onChange={this.locationChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Update scat</button>
        </form>
      </div>
  );
}
}

export default EditScat;
