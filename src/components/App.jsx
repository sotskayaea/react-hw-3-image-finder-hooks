import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { AppProvider, useApp } from './AppContext';

// import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AppProvider>
      <Searchbar />
      <ImageGallery />
    </AppProvider>
  );
};
export default App;

// export class App extends Component {
//   state = {
//     value: null,
//   };

//   onSubmitForm = newValue => {
//     this.setState({ value: newValue });
//   };
//   render() {
//     return (
//       <div>
//         <Searchbar onSubmit={this.onSubmitForm} />
//         <ImageGallery value={this.state.value} />
//       </div>
//     );
//   }
// }
