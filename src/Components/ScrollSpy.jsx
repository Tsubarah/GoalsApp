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
                        <li><a href="#section_1"><strong>2020</strong></a></li>
                        <li><a href="#section_2"><strong>2021</strong></a></li>
                        <li><a href="#section_3"><strong>2022</strong></a></li>
                    </ul>
                </ScrollspyNav>
                
                <div>
                    
                    <div id="section_1" className="scrollspy-section" >
                        <h2><strong>2020</strong></h2>
                        <hr />
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ratione dolore, rem dignissimos nulla blanditiis ab alias aperiam quas facere, temporibus, iusto recusandae laborum sed vitae quos pariatur praesentium?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ratione dolore, rem dignissimos nulla blanditiis ab alias aperiam quas facere, temporibus, iusto recusandae laborum sed vitae quos pariatur praesentium?
                            </div>
                        <hr />
                    </div>
                    <div id="section_2" className="scrollspy-section">
                        <h2><strong>2021</strong></h2>
                        <hr />
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam  soluta ratione dolore, rem dignissimos nulla blanditiis ab alias aperiam quas facere, temporibus, iusto recusandae laborum sed vitae quos pariatur praesentium?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ratione dolore, rem dignissimos nulla blanditiis ab alias aperiam quas facere, temporibus, iusto recusandae laborum sed vitae quos pariatur praesentium?
                            </div>
                        <hr />
                    </div>
                    <div id="section_3" className="scrollspy-section">
                        <h2><strong>2022</strong></h2>
                        <hr />
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ratione dolore, rem dignissimos nulla blanditiis ab alias aperiam quas facere, temporibus, iusto recusandae laborum sed vitae quos pariatur praesentium?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam soluta ratione dolore, rem dignissimos nulla blanditiis ab alias aperiam quas facere, temporibus, iusto recusandae laborum sed vitae quos pariatur praesentium?
                            </div>
                            <hr />
                    </div>
                </div>
            </div>
  )
}

export default ScrollSpy