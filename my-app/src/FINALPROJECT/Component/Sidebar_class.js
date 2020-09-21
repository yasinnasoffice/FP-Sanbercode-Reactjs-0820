import React from "react";
import Sidebar from "react-sidebar";

class Sidebar_class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b>=== Menu Dashboard === 
          <br/> 
          <br/><ul className="satu">
                   <li>Movies</li><br/>
                   <li>Games</li>
               </ul>
        </b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{width : "700px", sidebar: { background: "#4169E1" } }}
        
      >
        <ul className="dua">
          <li>
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Dashboard
        </button>
        </li>
        <li>
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Log out
        </button>
        </li>
        </ul>
      </Sidebar>


     
    );
  }
}

export default Sidebar_class;