fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jd=>{
    const jt=jd.attachments[0].text;
    const je=document.getElementById('je');
    je.innerHTML=jt;
})