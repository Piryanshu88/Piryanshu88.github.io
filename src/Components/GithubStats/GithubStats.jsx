import './GitHub.css'
const Stats = () => {
  return (
    // streak
    <div>
      <div className="git-status">
        <a href="https://github.com/Piryanshu88">
          <img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com?user=Piryanshu88&hide_border=true&background=4db5ff&ring=000000&currStreakLabel=000000&stroke=1A1919&fire=2C2526"
          />
        </a>
      </div>
      {/* <hr style={{border:"2px solid #4db5ff",height:"2px"}}/> */}

      <div className="git-status"      >
        <a href="https://github.com/Piryanshu88">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Piryanshu88&hide=c%23,powershell,Mathematica,Ruby,Objective-C,Objective-C%2b%2b,Cuda&title_color=000000&text_color=000000&icon_color=61dafb&bg_color=4db5ff&langs_count=8&layout=compact&border_color=61dafb&hide_border=true"
            style={{ objectFit: "contain" }}
          />
        </a>
      </div>
      <div className="git-status">
        <a href="https://github.com/Piryanshu88" style={{ flex: "1" }}>
          <img
            style={{ objectFit: "contain" }}
            src="https://awesome-github-stats.azurewebsites.net/user-stats/Piryanshu88?cardType=github&theme=vue-dark&Background=4DB5FF&Title=2C2C6C&Ring=2C2C6C&Text=000000&Border=4DB5FF" //stats
          />
        </a>
      </div>
    </div>
  );
};

export default Stats;
