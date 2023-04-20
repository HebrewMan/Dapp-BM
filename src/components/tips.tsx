import { EventSourcePolyfill } from 'event-source-polyfill';

import { useEffect,useState } from 'react';

function Tips() {

  let [text,setText] = useState();


  // let basicUrl = 'https://api.tuojin.cc';//https://www.blk123.com
  let basicUrl = 'https://www.blk123.com';//https://www.blk123.com

  

  const handleChange = (event:any)=>{
    event.preventDefault();
    console.log(event.target.value)

    const evtSource = new EventSourcePolyfill(basicUrl+"/chat/stream?streamId=" + event.target.value, {

      headers: {
        Authorization: 'Bearer afdda1b5f6d000739aa2739c7565a958044e95b63d56fafc5c3d00ab6f0d3b05',
        Accept: "text/event-stream",
      }

    })

    evtSource.onopen = function () {
      console.log("onopen");
    };

    evtSource.onmessage = function (event: any) {

      console.log(event.type)

      console.log(event.data)
      text+=event.data;
      setText(text);

    }
    evtSource.onerror = function (event) {
      console.log("onerror", event);
      evtSource.close();
  };
}



  // function onStream() {
  //     //alert(document.getElementById("streamId").value)
  //     console.log("onStream");
  //     var content = document.getElementById("content");
  //     const message = "介绍一下鱼";
  //     let basicUrl = 'https://13.229.125.103:888';//
  //     // let basicUrl = 'https://api.tuojin.cc';
  //     var source = new EventSource(
  //         // "https://13.229.125.103:888/"
  //         basicUrl+"/chat/stream?streamId=" + '', {
            
  //         }
  //     );
   
  //     source.onmessage = function (event) {
  //         if (event.type == "close") {
  //             source.close();
  //             console.log("close");
  //             return;
  //         }
  //         if (event.type == "message") {
  //             if (event.data === "") {
  //                 content.innerHTML += "\n";
  //             } else {
  //                 content.innerHTML += event.data
  //                     .replace(/\r/, "\n")
  //                     .replace("<c-api-line>", "\n");
  //             }
  //         }
  //     };
    
  // }


  return (
    <div className='tips'>
      ID  <input  type="text" onChange={handleChange} /> 
      <h5>{text}</h5>
      {/* <p>① 链接钱包</p>
      <p>② 判断当前账户是不是 0xa89c...7926</p>
      <p>③ 检查所有参数</p> */}
    </div>
  )
}
export default Tips;
