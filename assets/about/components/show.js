

function MoreAbout(){
  const [isShow,setIsShow] = React.useState(false);

  React.useEffect(()=>{
    if(isShow){
      $(".show-about").show();
    }else {
      $(".show-about").hide();
    }
  },[isShow]);

  const changeshow = () => {
    if(isShow){
      setIsShow(false);
    }else {
      setIsShow(true);
    }
  }

  return(
    <>
      <div className="is-show-box" onClick={changeshow}>
        {isShow ? "赶紧收起来" : "🙅不要点"}
      </div>
    </>
  )
}

const isMoreAbout = ReactDOM.createRoot(document.getElementById('is-show-about'));
isMoreAbout.render(<MoreAbout/>);
