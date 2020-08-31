const maincolor = '#87FFB7' //여기에 메인컬러를 입력하세요
const meavatar = ''

const projectname = ['Light','React Native','Lite']; //여기에 project 이름을 입력하세요
const projectment = ['No Long Loading!','Simple and Convenient','The best weather app'] //여기에 project 소개를 입력하세요
const avatar = [''] //thumbnail links




for(var i = 0; i<projectname.length; i++){ //버튼 생성
  document.getElementsByClassName('project')[0].innerHTML += `<a href="/"><img src="${avatar[i]}"><div><p class="pname"><strong>${projectname[i]}</strong></p><p class="pment">${projectment[i]}</p></div></a>`
}

document.title = `${nickname}의 공식사이트`
document.querySelector("body > div.name").innerHTML = name
document.querySelector("body > div.ment").innerHTML = myment
document.querySelector("body > div.container > svg > path").style.fill = maincolor
document.querySelector("body > div.profile > a").href = `https://github.com/Tim232`
document.querySelector("body > div.profile > a").innerHTML = `<img src="${meavatar}">`
document.querySelector("body > div.profile > div").innerHTML = `<p>이름 : ${name}</p><p>별명 : ${nickname}</p><p>대표작 : ${mywork}</p><p>경력 : ${career}</p><p>소개 : ${explanation}</p>`
document.querySelector("body > div.footer").innerHTML = `<a href="https://github.com/Tim232"><span>Github</span></a><a href="https://discord.endbot.kro.kr/"><span>Discord</span></a>` 
