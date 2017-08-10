function init() {
    var fragment=document.createDocumentFragment();
    for(i=0;i<num;i++)
    {
        var randdomX=~~(Math.random()*wW)-bz;
        randdomX=Math.max(0,randdomX);
        var oBalloon=document.createElement('div');
        oBalloon.className='balloon';
        oBalloon.style.top=wH-bz+"px";
        oBalloon.style.left=randdomX+"px";
        oBalloon.speed=~~(Math.random()*6)+1;
        fragment.appendChild(oBalloon);
    }
    document.body.appendChild(fragment);
}
function boom(cb) {
    this.timer=setInterval(function () {
        if (this.offsetWidth<10)
        {
            cb&&cb();
            clearInterval(this.timer);
        }
        this.speed++; //速度变快
        this.style.width=this.offsetWidth-10+'px';
        this.style.height=this.offsetHeight-10+'px';
        this.style.top=this.offsetTop-this.speed+'px';
    }.bind(this),1000/30)
}
function move() {
    var oBalloons=document.querySelectorAll('.balloon');
    for(var i=0,len=oBalloons.length;i<len;i++)
    {
        oBalloons[i].style.top=oBalloons[i].offsetTop-oBalloons[i].speed+'px';
    }
}