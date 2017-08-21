import styled from 'styled-components';
import { Flex, Div } from 'theme/grid';
import { navy, red, gray } from 'theme/variables';
import { Link } from 'react-router';

export const NavigationContainer = styled(Flex)`
	position: fixed;
	right: 2em;
	top: 1.8em;
`;

export const NavItem = styled(Link)`
	margin-right: 30px;
	font-size: 1.5em;
	cursor: pointer;
	color: ${navy};
	position: relative;
	text-decoration: none;
	
	&:hover {
		color: ${red};
		&:after {
			content: ' ';
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 100%;
			background-color: ${gray};
			z-index: -1;
			transform: scale(1.3, 1.5);
		}
	}
`;