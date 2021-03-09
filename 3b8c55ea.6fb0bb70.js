(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),o=(a(0),a(98)),i={id:"installation",title:"Installation"},c={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"Frigate is a Docker container that can be run on any Docker host including as a HassOS Addon. See instructions below for installing the HassOS addon.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/frigate/installation",editUrl:"https://github.com/blakeblackshear/frigate/edit/master/docs/docs/installation.md",version:"current",sidebar:"docs",previous:{title:"Recommended hardware",permalink:"/frigate/hardware"},next:{title:"Troubleshooting and FAQ",permalink:"/frigate/troubleshooting"}},s=[{value:"HassOS Addon",id:"hassos-addon",children:[]},{value:"Docker",id:"docker",children:[{value:"Calculating shm-size",id:"calculating-shm-size",children:[]}]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"Virtualization",id:"virtualization",children:[{value:"Proxmox",id:"proxmox",children:[]},{value:"ESX",id:"esx",children:[]}]}],l={toc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Frigate is a Docker container that can be run on any Docker host including as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.home-assistant.io/addons/"}),"HassOS Addon"),". See instructions below for installing the HassOS addon."),Object(o.b)("p",null,"For HomeAssistant users, there is also a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/blakeblackshear/frigate-hass-integration"}),"custom component (aka integration)"),". This custom component adds tighter integration with HomeAssistant by automatically setting up camera entities, sensors, media browser for clips and recordings, and a public API to simplify notifications."),Object(o.b)("p",null,"Note that HassOS Addons and custom components are different things. If you are already running Frigate with Docker directly, you do not need the Addon since the Addon would run another instance of Frigate."),Object(o.b)("h2",{id:"hassos-addon"},"HassOS Addon"),Object(o.b)("p",null,"HassOS users can install via the addon repository. Frigate requires an MQTT server."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to Supervisor > Add-on Store > Repositories"),Object(o.b)("li",{parentName:"ol"},"Add ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/blakeblackshear/frigate-hass-addons"}),"https://github.com/blakeblackshear/frigate-hass-addons")),Object(o.b)("li",{parentName:"ol"},"Setup your configuration in the ",Object(o.b)("inlineCode",{parentName:"li"},"Configuration")," tab"),Object(o.b)("li",{parentName:"ol"},"Start the addon container"),Object(o.b)("li",{parentName:"ol"},'If you are using hardware acceleration for ffmpeg, you will need to disable "Protection mode"')),Object(o.b)("h2",{id:"docker"},"Docker"),Object(o.b)("p",null,"Make sure you choose the right image for your architecture:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Arch"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Image Name"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amd64"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blakeblackshear/frigate:stable-amd64")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amd64nvidia"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blakeblackshear/frigate:stable-amd64nvidia")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"armv7"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blakeblackshear/frigate:stable-armv7")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aarch64"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"blakeblackshear/frigate:stable-aarch64")))),Object(o.b)("p",null,"It is recommended to run with docker-compose:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"version: '3.9'\nservices:\n  frigate:\n    container_name: frigate\n    privileged: true # this may not be necessary for all setups\n    restart: unless-stopped\n    image: blakeblackshear/frigate:<specify_version_tag>\n    devices:\n      - /dev/bus/usb:/dev/bus/usb\n      - /dev/dri/renderD128 # for intel hwaccel, needs to be updated for your hardware\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - <path_to_config_file>:/config/config.yml:ro\n      - <path_to_directory_for_media>:/media/frigate\n      - type: tmpfs # Optional: 1GB of memory, reduces SSD/SD Card wear\n        target: /tmp/cache\n        tmpfs:\n          size: 1000000000\n    ports:\n      - '5000:5000'\n      - '1935:1935' # RTMP feeds\n    environment:\n      FRIGATE_RTSP_PASSWORD: 'password'\n")),Object(o.b)("p",null,"If you can't use docker compose, you can run the container with something similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run -d \\\n  --name frigate \\\n  --restart=unless-stopped \\\n  --mount type=tmpfs,target=/tmp/cache,tmpfs-size=1000000000 \\\n  --device /dev/bus/usb:/dev/bus/usb \\\n  --device /dev/dri/renderD128\n  -v <path_to_directory_for_media>:/media/frigate \\\n  -v <path_to_config_file>:/config/config.yml:ro \\\n  -v /etc/localtime:/etc/localtime:ro \\\n  -e FRIGATE_RTSP_PASSWORD='password' \\\n  -p 5000:5000 \\\n  -p 1935:1935 \\\n  blakeblackshear/frigate:<specify_version_tag>\n")),Object(o.b)("h3",{id:"calculating-shm-size"},"Calculating shm-size"),Object(o.b)("p",null,'The default shm-size of 64m is fine for setups with 3 or less 1080p cameras. If frigate is exiting with "Bus error" messages, it could be because you have too many high resolution cameras and you need to specify a higher shm size.'),Object(o.b)("p",null,"You can calculate the necessary shm-size for each camera with the following formula:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"(width * height * 1.5 * 7 + 270480)/1048576 = <shm size in mb>\n")),Object(o.b)("p",null,"The shm size cannot be set per container for HomeAssistant Addons. You must set ",Object(o.b)("inlineCode",{parentName:"p"},"default-shm-size")," in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," to increase the default shm size. This will increase the shm size for all of your docker containers. This may or may not cause issues with your setup. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file"}),"https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file")),Object(o.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/blakeblackshear/blakeshome-charts/tree/master/charts/frigate"}),"helm chart"),"."),Object(o.b)("h2",{id:"virtualization"},"Virtualization"),Object(o.b)("p",null,"For ideal performance, Frigate needs access to underlying hardware for the Coral and GPU devices for ffmpeg decoding. Running Frigate in a VM on top of Proxmox, ESXi, Virtualbox, etc. is not recommended. The virtualization layer typically introduces a sizable amount of overhead for communication with Coral devices."),Object(o.b)("h3",{id:"proxmox"},"Proxmox"),Object(o.b)("p",null,"Some people have had success running Frigate in LXC directly with the following config:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"arch: amd64\ncores: 2\nfeatures: nesting=1\nhostname: FrigateLXC\nmemory: 4096\nnet0: name=eth0,bridge=vmbr0,firewall=1,hwaddr=2E:76:AE:5A:58:48,ip=dhcp,ip6=auto,type=veth\nostype: debian\nrootfs: local-lvm:vm-115-disk-0,size=12G\nswap: 512\nlxc.cgroup.devices.allow: c 189:385 rwm\nlxc.mount.entry: /dev/dri/renderD128 dev/dri/renderD128 none bind,optional,create=file\nlxc.mount.entry: /dev/bus/usb/004/002 dev/bus/usb/004/002 none bind,optional,create=file\nlxc.apparmor.profile: unconfined\nlxc.cgroup.devices.allow: a\nlxc.cap.drop:\n")),Object(o.b)("h3",{id:"esx"},"ESX"),Object(o.b)("p",null,"For details on running Frigate under ESX, see details ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/blakeblackshear/frigate/issues/305"}),"here"),"."))}b.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,m=d["".concat(i,".").concat(p)]||d[p]||u[p]||o;return a?r.a.createElement(m,c(c({ref:t},l),{},{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);