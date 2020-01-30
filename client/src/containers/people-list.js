import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserItem, PeopleSearch } from 'components';

class PeopleList extends Component {
	render() {
		return (
			<div class="people-list" id="people-list">
				<PeopleSearch />
				<ul class="list">
					{this.props.people.map(user => {
						console.log('user: ', user)
						return (
							<UserItem key={user.id} userName={user.userName}/>
						)
					})}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		people: state.peopleReducer
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList); 