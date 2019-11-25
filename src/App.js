import React, { Component } from 'react';
import "wired-card"
import "wired-button"
import "wired-progress"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time:10,
      progress:0,
      statusTv:"暂停"
    }
    this.isPaused = false
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <wired-card elevation="3" style={{ "width": "70vmin" }}>
            <h3>鼠鼠在碎觉--中转枢纽</h3>
            <img src="https://www.sszsj.top/images/favicon.png" alt="logo" />
            <div>年轻人不要瞎点</div>
            <div>即将跳转至主站</div>
            <div className="btn_container">
              <wired-button style={{ "marginTop": "10px" }} onClick={()=>this._goPage("https://sszsj.top/")}>鼠鼠在碎觉(默认)</wired-button>
              <wired-button style={{ "marginTop": "10px" }} onClick={()=>this._goPage("https://www.sszsj.top/pages/cichic/index.html")}> cichic 产品工具 </wired-button>
              <wired-button style={{ "marginTop": "10px" }} onClick={()=>this._goPage("https://www.sszsj.top/pages/startdoing/index.html")}>开始XX表情生成器</wired-button>
            </div>
          </wired-card>
          <div className="pause_container">
            <div>{this.state.time}s</div>
            <wired-button onClick={()=>{this._onPauseClick()}}>{this.state.statusTv}</wired-button>
          </div>
          <wired-progress value={this.state.progress} style={{ "width": "70vmin" }}></wired-progress>
          <div style={{"marginTop":"10px"}}></div>
        </div>
      </div>
    );
  }
  _goPage=(url)=>{
    clearInterval(this.timer)
    window.location.href = url
  }

  _onPauseClick=()=>{
    if(this.isPaused){ //暂停就继续
      this.timer = setInterval(()=>{
        let nowPro = this.state.progress
        nowPro = nowPro+1
        let nowTime = 10 - Math.floor(nowPro/10)
        this.setState({
          time:nowTime,
          progress:nowPro
        })
        if(nowPro>100){
          clearInterval(this.timer)
          this._goPage("https://sszsj.top/")
        }
      },100)
      this.setState({statusTv:"暂停"})
      this.isPaused = false
    }else{ //没暂停就暂停
      this.isPaused = true
      this.setState({statusTv:"继续"})
      clearInterval(this.timer)
    }

  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      let nowPro = this.state.progress
      nowPro = nowPro+1
      let nowTime = 10 - Math.floor(nowPro/10)
      this.setState({
        time:nowTime,
        progress:nowPro
      })
      if(nowPro>100){
        clearInterval(this.timer)
        this._goPage("https://sszsj.top/")
      }
    },100)

  }



}

export default App;
