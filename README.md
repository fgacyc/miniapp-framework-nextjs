<div align="center">
    <H1 align="center">FGA Mobile Mini App Framework</H1>
    <a href="README.md">English</a>
    <span> | </span>
    <a href="README_CN.md">中文</a>
</div>

# 1 Introduction

FGA Mobile Mini App Framework is a front-end product solution build with Typescript, based on [NextJS](https://nextjs.org/) and [T3](https://create.t3.gg/), using the latest technology stack, with built-in i18n international solutions, dynamic routing, UI framework, state management, analysis tools and other rich functional components, it can quickly help you build a Mini App product prototype.

The following external libraries are used in this framework:
* [Ant Design Mobile](https://mobile.ant.design/components): UI framework
* [React i18n](https://react.i18next.com/): Internationalization
* [Zustand](https://zustand-demo.pmnd.rs/): State management
* [React Icons](https://react-icons.github.io/react-icons/): Icon library
* [Tailwind CSS](https://tailwindcss.com/): CSS framework


# 2. Function

## Mini App Basic Functions
* Floating button
* Popup menu
* Mini program feedback
* Mini program settings
* Mini program information
* Refresh, clear cache

## User login
* auto login
* Get user information (name, avatar, UID, Email)
* Get user token

## Internationalization
* Support multiple languages
* Consistent with mobile language

## UI framework
* Based on Ant Design Mobile
* Built-in react-icons
* Built-in Tailwind CSS

## development tools
*Built with Vite
* Built-in React and React Router
* Built-in Zustand state management


# 3. Apply for resources

Before starting development, please fill out this [Form](https://forms.gle/YLqFg3hJepD34TFA8) to request development resources

After successful application, you will get a Mini App config json file, which contains

- Github Repo
- Database
- Miniapp package information

example:

```json
{
     "github_repo": {
         "repo_url": "https://github.com/fgacyc/app1",
         "repo_invite": "https://github.com/fgacyc/app1/invitations"
     },
     "database": {
         "username": "fgacyc.official",
         "password": "Basdas32543oeAW",
         "host": "ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech",
         "port": "5432",
         "database": "test",
         "connect_string": "postgresql://fgacyc.official:Basdas32543oeAW@ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech:5432/test"
     },
     "package": {
         "name": "app1",
         "author": "FGACYC",
         "version": "0.0.1",
         "private": true,
         "app_id": "6d4a87d19be141c881ed",
         "shared": false,
         "instagram": "https://www.instagram.com/fgacyc/",
         "github": "https://github.com/fgacyc/",
         "type": "module"
     }
}
```

Package parameter explanation:

![](src/assets/README/about_ss.png)

![](src/assets/README/share_ss.png)
* package.name: project name -> (1)
* package.version: author -> (2)
* package.author: version number -> (3)
* package.instagram: Author Instagram address -> (4)
* package.github: Author Github address/Project Repo address -> (5)
* package.shared: whether the application address can be copied for sharing -> (6)


# 4. Development
Open the FGA Mobile Mini App Framework project: https://github.com/fgacyc/miniapp-framework-react
Then create a new repository using the project target, and then clone the new repository locally.

1. Create a project using a template

![](src/assets/README/new-repo.png)

2. Create a new repository

<img src="src/assets/README/create-repo.png" WIDTH="500">
<img src="src/assets/README/new-framework-repo.png" WIDTH="500">
<img src="src/assets/README/new-framework-repo1.png" WIDTH="500">


3. Download the framework code

```bash
$ git clone <your-repo-url>
```

Install dependencies

```bash
$ yarn install
```

run

```bash
$ yarn dev
```

If you are using VSCode, it is recommended to install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)



# 5. File structure
```text
prisma
Src
├── assets
├── components
├── locales
│ └── translation
├── pages
├── server
└── store
```
* assets: store static resources
* components: stores shared components
* locales: used for internationalization configuration, translation files are stored in translation
* pages: store pages
* server: stores server code
* store: storage State management

# 6. Routing

6.1 Get URL parameters
```text
https://example.com/room/123
```


```typescript
// pages/room/[id].tsx
import { useRouter } from 'next/router'

const Room: React.FC = () => {
     const router = useRouter()
     const {id} = router.query

     return <h1>Room: {id}</h1>
}
```
6.2 Obtain query parameters
```text
https://dashboard?search=my-project
```

```typescript
// pages/SearchBar.tsx
import { useSearchParams } from 'next/navigation'

const SearchBar: React.FC = () => {
     const searchParams = useSearchParams()
     const search = searchParams.get('search')
     return <>Search: {search}</>
}
```


# 7. Page style
For page style, please refer to mobile UI design: https://www.figma.com/design/4fWKR6XFtLrQbbdq1NSJmY/FGA-MobileApp


# 8. Icons
# 8.1 Mini App Icon
The Mini App icon is located in public/app_icon.png and can be replaced with your own icon.

![](src/assets/README/mini-app-icon.png)

Icon requirements: 1024x1024, PNG format, non-transparent background, non-white background. Examples are as follows:

<img src="src/assets/README/app_icon.png" width=300 />

# 8.2 Icon library
In this framework, we use the [React Icons](https://react-icons.github.io/react-icons/) icon library
You can find all the icons here, then click on the icon, copy the icon's code, and then paste it into your code to use.

<img src="src/assets/README/react-icons.png">

```typescript
// pages/index.tsx
import { RiCodeView } from "react-icons/ri";

const Index: React.FC = () => {
     return (
         <div>
             <RiCodeView />
         </div>
     );
}
```






# 9. State management
In Mini App, we use [Zustand](https://zustand-demo.pmnd.rs/) to implement state management, which can be achieved through simple configuration.
## 9.1 Define State
```typescript
// store.ts
import create from 'zustand';

interface StoreState {
     count: number;
     increment: () => void;
     decrement: () => void;
}

export const useStore = create<StoreState>((set) => ({
     count: 0,
     increment: () => set((state) => ({ count: state.count + 1 })),
     decrement: () => set((state) => ({ count: state.count - 1 })),
}));
```

## 9.2 Use State
```typescript
// components/Counter.ts
import { useStore } from './store';

const Counter: React.FC = () => {
     const count = useStore((state) => state.count);
     const increment = useStore((state) => state.increment);
     const decrement = useStore((state) => state.decrement);

     return (
         <div>
             <h1>{count}</h1>
             <button onClick={increment}>+</button>
             <button onClick={decrement}>-</button>
         </div>
     );
}
```


# 10. User basic information and identity information
## 10.1 Basic information
When opening the Mini App, user information, including name, avatar, UID (sub), Email, etc., will be automatically obtained through the Token passed in by Mobile.
It can be read in the following way
```typescript
import { useUserStore } from './store';
const UserInfo: React.FC = () => {
     const user = useUserStore((state) => state.user);

     return (
         <div>
             <h1>{user.name}</h1>
             <img src={user.picture} alt="avatar" />
             <p>{user.email}</p>
             <p>{user.sub}</p>
         </div>
     );
}
```
## 10.2 Identity information
In the Mini App, we will need to use the user's identity information, such as which church the user is in, which group they are in, group role, service position, etc.
At this time, we can obtain the user's identity information by calling the API.

*The API address is: https://identity.development.fgacyc.com
* API documentation address is: https://identity.development.fgacyc.com/docs

### 10.2.1 Obtain Bearer Token
1. In FGA Mobile App, enter the Mini App page and click Webview Tools

<img src="src/assets/README/webview_tools.png" width=300 >

2. In Webview Tools, copy Token

<img src="src/assets/README/cb497f47.jpg" width=300 >


### 10.2.2 View API documentation
1. Configure Bearer Token in API documentation

<img src="src/assets/README/doc-token.png" >

2. View the interface in the API document

<img src="src/assets/README/apis.png">

3. View the returned results in the API documentation

<img src="src/assets/README/try-api.png" >

### 10.2.3 Using API
The API is used to obtain user information through Bearer Token, for example:
```javascript
const url = 'https://identity.development.fgacyc.com/connect-groups';
const token = 'YOUR_BEARER_TOKEN_HERE'; // Replace with your actual Bearer token

fetch(url, {
     method: 'GET',
     headers: {
         'Authorization': `Bearer ${token}`,
         'Content-Type': 'application/json'
     }
})
.then(response => {
     if (!response.ok) {
         throw new Error(`HTTP error! Status: ${response.status}`);
     }
     return response.json();
})
.then(data => {
     console.log('Data received:', data);
})
.catch(error => {
     console.error('Error fetching data:', error);
});
```




# 11. Internationalization
In Mini App, we use React i18n to achieve internationalization, and multi-language switching can be achieved through simple configuration.
When the Mini App is opened, it will automatically switch the language according to Mobile's language settings. If the corresponding language is not found, English will be used by default.

## 11.1 International configuration
Store the translated content in src/locales/translation, and you can define different translation content in different language files.
```json
// src/locales/translation/en.json
{
     "hello": "Hello",
     "world": "World"
}
```
```json
// src/locales/translation/zh.json
{
     "hello": "Hello",
     "world": "world"
}
```

## 11.2 Using internationalization
```typescript
import { useTranslation } from 'react-i18next';

const Index: React.FC = () => {
     const { t } = useTranslation();

     return (
         <div>
             {t('hello')} {t('world')}
         </div>
);
}
```

## 11.3 Switch language
Because the language is set according to Mobile's language setting by default, the language will be automatically switched when the Mini App is opened, so there is no need to switch manually.
But if under special circumstances, you need to switch the language manually, you can do it in the following way.
```typescript
import { useTranslation } from 'react-i18next';
export default function Index(){
     const { i18n,t } = useTranslation();
     return (
         <div>
             <div>
                 {t('hello')} {t('world')}
             </div>
             <button onClick={() => i18n.changeLanguage('en')}>English</button>
             <button onClick={() => i18n.changeLanguage('zh')}>中文</button>
         </div>
     )
}
```


# 12. Database
In the FGA IT system, we use the PostgreSQL database uniformly. You can connect to the database through the provided database information and perform data reading and writing operations.
In the Mini App config json file, the connection information of the database is provided.

```json
{
   "database": {
     "username": "fgacyc.official",
     "password": "Basdas32543oeAW",
     "host": "ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech",
     "port": "5432",
     "database": "test",
     "connect_string": "postgresql://fgacyc.official:Basdas32543oeAW@ep-raspy-sun-45651351.ap-southeast-1.aws.neon.tech:5432/test"
   }
}
```
You can connect to and operate the database through the following PostgreSQL GUI tools:
* [DBeaver](https://dbeaver.io/)
* [pgAdmin](https://www.pgadmin.org/)
* [DataGrip](https://www.jetbrains.com/datagrip/)

# 13. Bottom menu
The bottom menu is a function provided by Mini App. It is located in `src/components/action-sheet-menu.jsx`. Some functions can be implemented through the bottom menu.
For example, refreshing, clearing cache, applet information, etc. can be configured to achieve different functions.
```typescript
const buttonsData: ButtonData[] = [
     {
         text: 'Refresh',
         icon: <ReloadOutlined />,
         onClick: () => {
             window.location.reload();
         },
     },
     {
         text: 'Clear Cache',
         icon: <DeleteOutlined />,
         onClick: () => {
             localStorage.clear();
             window.location.reload();
         },
     },
     {
         text: 'Settings',
         icon: <SettingOutlined />,
         onClick: () => {
             navigate('/settings');
         },
     },
     // ...
];
```

You can turn off a function by commenting out unnecessary buttons. In particular, please do not enable the development tool button in a production environment, as this will expose some sensitive information.
```typescript
{
     // ...
    
     // title: "Dev",
     // icon: <GoTools className={buttonStyle}/>,
     // onClick: () => {
     // setDevModal(true);
     // setShowMenu(false);
     // }
}
```


# 14. Development tools
Because the navigation bar and debugging tools are hidden in the Webview environment where the Mini App is located, we need some tools to help us develop.
We can click the DEV button in the bottom menu to open the development tools

<img src=src/assets/README/113131311.jpg width=300 />

Currently, in the development tools, you can view the UID of the current user, the current language, the URL of the current Mini App, and the Local URL used for local development.

<img src=src/assets/README/564531611511.jpg width=300 />



# 15. Deployment
After the development is completed, the PM of Mini App will arrange the deployment, the deployment method is implemented through Vercel, so before submitting the code,
1. Please ensure that the code can run normally.
2. Ensure that all configuration items (such as PI Host, Database config, etc.) use environment variables and do not contain sensitive information.
3. Make sure the code follows the team’s coding standards: https://airbnb.io/javascript/react/


After deployment, you will get a URL through which you can access the Mini App, but do not share this URL.


All Mini Apps run in Mobile Webview, so they have a certain degree of security. However, exposure to the browser environment may cause some security issues, such as user information leakage, API exposure, etc. So the URL of the Mini app is private,
Only developers and testers have access in a browser environment.



# 16.Access analysis
After being deployed to Vercel, you can automatically check the Mini App's access status through Vercel's analysis tool. You can view the number of visits, access sources, access devices and other information without additional configuration.

# 17. Question
## 17.1 How to use application settings
In Mini App, we provide a settings page `src/pages/settings.jsx`, through which you can set some Mini App configurations.
And there is a global state `useSettingsStore` to store these configurations (located in `src/store/settings-store.ts`), and the configuration can be read and modified through this state.
## 17.2 How to read ENV variables 
```
DB_SOME_KEY=123
```
```
console.log(process.env.DB_SOME_KEY) // "123"
```

