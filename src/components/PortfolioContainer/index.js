import React, { Component } from "react";
import JavascriptPortfolio from "../JavascriptPortfolio";
import NodePortfolio from "../NodePortfolio";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class PortfolioContainer extends Component {
    constructor(props, context) {
      super(props, context);
        this.state = {
            key: 'jsPortfolio',
        };
    }

    render() {
        return (
                <Tabs
                    id="controlled-tab-example"
                    fill variant="tabs"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="jsPortfolio" title="JavaScript Portfolio">
                        <JavascriptPortfolio/>
                    </Tab>
                    <Tab eventKey="nodePortfolio" title="Node.js Portfolio">
                        <NodePortfolio/>
                    </Tab>
                </Tabs>
            );
    }
}

export default PortfolioContainer; 