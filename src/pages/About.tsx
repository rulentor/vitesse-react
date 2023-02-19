import { useState } from 'react';
import React from 'react'
import Home from '../layouts/home';
import * as ReactDOMClient from 'react-dom/client';

import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

export default function About() {

//const root = ReactDOMClient.createRoot(document.getElementById('root'));
//	root.render( ... )
const Example = () => {
  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Медтокен - сервис здоровых подарков</PanelHeader>
              <Group header={<Header mode="secondary">1 подписчик</Header>}>
                <SimpleCell>Подарить токен себе или другу</SimpleCell>
                <SimpleCell>Как это работает</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};
   return (
	  <React.StrictMode>
		<ConfigProvider>
		  <AdaptivityProvider>
            <Example />
		  </AdaptivityProvider>
		</ConfigProvider>
	  </React.StrictMode>
   );
}       

