import ScrollspyNav from "react-scrollspy-nav"

const ScrollSpy = () => {
  return (
    <div>
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul className="scrollspy-nav">
                        <li><a href="#section_1">2020</a></li>
                        <li><a href="#section_2">2021</a></li>
                        <li><a href="#section_3">2022</a></li>
                    </ul>
                </ScrollspyNav>
                
                <div>
                    <div style={{"height": "400px"}}><span>Welcome!</span></div>
                    <div id="section_1" style={{"height": "500px"}}><span>2020</span></div>
                    <div id="section_2" style={{"height": "500px"}}><span>2021</span></div>
                    <div id="section_3" style={{"height": "500px"}}><span>2022</span></div>
                </div>
            </div>
  )
}

export default ScrollSpy