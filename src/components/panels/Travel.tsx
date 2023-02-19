import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Div, Group, Headline, CardScroll, Card, CardGrid, ContentCard, Title } from '@vkontakte/vkui';

import '../../App.css';
import search_img from '/img/search.png'
import card1 from '/img/Cards/card1.png'
import card2 from '/img/Cards/card2.png'
import card3 from '/img/Cards/card3.png'
import card4 from '/img/Cards/card4.png'
import card5 from '/img/Cards/card5.png'
import card6 from '/img/Cards/card6.png'
import card7 from '/img/Cards/card7.png'
import card8 from '/img/Cards/card8.png'
import card9 from '/img/Cards/card9.png'
import card10 from '/img/Cards/card10.png'
import card11 from '/img/Cards/card11.png'
import card12 from '/img/Cards/card12.png'
import card13 from '/img/Cards/card13.png'
import card14 from '/img/Cards/card14.png'
import card15 from '/img/Cards/card15.png'
import card16 from '/img/Cards/card16.png'

const Travel = props => {
	return(
	<Panel id={props.id}>
		<PanelHeader>
			VKПутешествия
		</PanelHeader>
		<Group>
			<Div>
				<img className='search' src={search_img}/>
			</Div>
			<Div>
				<Headline level="1" weight="2">
				Лучшие места для начала</Headline>
			</Div>
			<Div>
			<Group>
				<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card1}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card2}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card3}/>
					</Card>
				</CardScroll>
			</Group>
			</Div>
			<Div>
				<Headline level="1" weight="2">
				Платные походы в группе</Headline>
			</Div>
			<CardGrid size="l">
				<ContentCard
				src={card4}
				header="Гора Шунут 🍁⛰️"
				text="Павел Колесников - опыт походов 7 лет"
				caption="20 км, небольшие подъёмы"
				/>
			</CardGrid>
			<Div>
				<Headline level="1" weight="2">
				Места для опытных походников</Headline>
			</Div>
			<Group>
			<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card6}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card7}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card8}/>
					</Card>
				</CardScroll>
			</Group>
			<Div>
				<Headline level="1" weight="2">
				Бесплатные походы в группе</Headline>
			</Div>
			<CardGrid size="l">
				<ContentCard
				src={card5}
				header="Село Кузино 🚉🌅"
				text="Виктория Корнеплодова"
				caption="Озёра...Луга...Косули и кролики...Очень красивые расветы, оно стоит 3 часов на электричке!!!"
				/>
			</CardGrid>
		</Group>
		<Div>
			<Title level="2" style={{ marginBottom: 16 }}>
				Советы
			</Title>
		</Div>
		<Group>
		<Div>
			<Headline level="1" weight="2">
				Статьи о путешествиях на природе</Headline>
		</Div>
		<Group>
			<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card9}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card10}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card11}/>
					</Card>
				</CardScroll>
			</Group>
		</Group>
		<Div>
			<Headline level="1" weight="2">
				Что приготовить в походе</Headline>
		</Div>
		<Group>
			<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card12}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card13}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card14}/>
					</Card>
			</CardScroll>
		</Group>
		<Div>
			<Headline level="1" weight="2">
				Лайфхаки для выживания</Headline>
		</Div>
		<Group>
			<CardScroll size="s">
					<Card>
						<img style={{ width: "100%"}} src={card15}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card16}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card9}/>
					</Card>
					<Card>
						<img style={{ width: "100%" }} src={card11}/>
					</Card>
			</CardScroll>
		</Group>
	</Panel>
)};

Travel.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Travel;
