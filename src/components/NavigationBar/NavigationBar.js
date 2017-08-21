import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

export class NavigationBar extends Component {
	render() {
		return (
			<NavigationContainer>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/Projects">Projects</NavItem>
				<NavItem>About Me</NavItem>
			</NavigationContainer>
		);
	}
}

export default NavigationBar;