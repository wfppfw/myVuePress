    /** 判断是否是电脑端访问 */
    let isPC = ()=> {
        let userAgentInfo = navigator.userAgent || "";
        const Agents = [
          "Android",
          "iPhone",
          "SymbianOS",
          "Windows Phone",
          "iPad",
          "iPod"
        ];
        let flag = true;
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
          }
        }
        return flag;
      };
isPC() && loadlive2d('live2d','/live2d/assets/koharu.model.json');