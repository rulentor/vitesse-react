import React from 'react';
import PropTypes from 'prop-types';
import onbd1 from '/img/medtoken-logo.jpg'
import '../../App.css'
import { Panel, PanelHeader, Button, Div} from '@vkontakte/vkui';

const Home = ({ id, go }) => (
	<Panel id={id}>
		<PanelHeader>Медтокен</PanelHeader>
			<Div>
				<img className='on_img' src={onbd1}/>
				<Button stretched size="l" mode="primary" onClick={go} data-to="persik">
					Продолжить!
				</Button>
			</Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
