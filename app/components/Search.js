import React from "react";

class Search extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return(

      <div>

        <h2>Search</h2>

        {this.props.children}

      </div>

    )
  }

}

export default Search;
