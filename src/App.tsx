import React, { Suspense, useState, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import logo from './logo.svg'
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol } from '@vkontakte/vkui';
import routes from '~react-pages'

import Home from './components/panels/Home';
import Persik from './components/panels/Persik';
import Onboarding3 from './components/panels/Onboarding3'
import Travel from './components/panels/Travel'

bridge.send("VKWebAppInit");

function App() {
  const [scheme, setScheme] = useState('bright_light')
  const [activePanel, setActivePanel] = useState('home');
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

  useEffect(() => {
	bridge.subscribe(({ detail: { type, data }}) => {
	  if (type === 'VKWebAppUpdateConfig') {
		setScheme(data.scheme)
	  }
	});

	async function fetchData() {
	  const user = await bridge.send('VKWebAppGetUserInfo');
		setUser(user);
		setPopout(null);
	}
	fetchData();
  }, []);

  const go = e => {
	setActivePanel(e.currentTarget.dataset.to);
  };

/*
      <Suspense fallback={<p>Loading...</p>}>
       {useRoutes(routes)}
      </Suspense>
*/

  return (
    <div className='w-full m-0 dark:bg-primary-800 root'>
	  <ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout popout={popout}>
						<SplitCol>
							<View activePanel={activePanel}>
								<Home id='home' go={go} />
								<Persik id='persik' go={go} />
								<Onboarding3 id='onbd3' go={go}/>
								<Travel id='travel' go={go}/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
	  </ConfigProvider>
    </div>
  )
}

export default App
