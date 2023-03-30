canvas=document.querySelector('canvas')
canvas.height=innerHeight
canvas.width=innerWidth
c=canvas.getContext('2d')

const mouse={
    x:window.innerWidth/2,
    y:window.innerHeight/2
}
colorarr=['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
'#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
'#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
'#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
'#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
'#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
'#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
'#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
'#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
'#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

onmousemove=(e)=>{
    mouse.x=e.clientX
    mouse.y=e.clientY
}

function partical(y,x,color,radius){

    this.x=x
    this.y=y
    this.radius=radius
    this.color=color;
    this.dx=Math.random()*360;
    this.line=(Math.random()*5)+5
    this.xt=x
    this.yt=y
    this.draw=function (){
        lastx=this.x;
        lasty=this.y;
        this.xt+=(mouse.x-this.x)
        this.yt+=(mouse.y-this.y)
        this.x=this.xt+Math.cos(this.dx)*this.radius;
        this.y=this.yt+Math.sin(this.dx)*this.radius;
        this.dx+=0.05;
        console.log(mouse.x)

        c.beginPath();
        c.strokeStyle=this.color;
        c.lineWidth=this.line;
        c.moveTo(lastx, lasty);
        c.lineTo(this.x,this.y);
        c.stroke();
        c.closePath();
    }
}

object=[]
    for(i=0;i<50;i++){
        a=colorarr[Math.floor(Math.random()*colorarr.length)]
        b=Math.random()*150
        object.push(new partical(innerHeight/2-10,innerWidth/2-50,a,b+100))
    }

function animation(){
    requestAnimationFrame(animation)
    c.fillStyle="rgba(0,0,0,0.1)";
    c.fillRect(0,0,window.innerWidth,window.innerHeight);
    for(i=0;i<object.length;i++){
        object[i].draw()
    }
}

animation()