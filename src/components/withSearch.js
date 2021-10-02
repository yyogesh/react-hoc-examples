import React from 'react';


const withSearch = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            searchTerm: ''
        }
        handleSearch = event => {
            this.setState({ searchTerm: event.target.value })
        }

        render() {
            return (
                <div>
                    <div>
                        <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
                    </div>
                    <WrappedComponent searchTerm={this.state.searchTerm} />
                </div>
            )
        }
    }

}

export default withSearch;