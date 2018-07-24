import { NavBar, Icon } from 'antd-mobile';
import React from 'react';
export default class HomeHeader extends React.Component {
    render(){
        const {title} = this.props;
        return(
            <div>
                <NavBar
                    mode="dark"
                    leftContent=""
                    >{title}
                </NavBar>
            </div>
        )
    }
}
