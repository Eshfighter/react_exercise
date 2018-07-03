import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const css = require('./DropdownMenu.css');

export default class DropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
        };
        this.clickOutsideEventListener();
    }

    clickOutsideEventListener(){
        window.addEventListener('click', (event)=>{
            const elementsIdList = ["dropdown-wrapper","dropdown-header","dropdown-title"]
            if(elementsIdList.indexOf(event.target.id) === -1 && this.state.listOpen){
                this.setState({
                    listOpen: false
                })
            }
        });
    }

    toggleList() {
        this.setState(prevState => ({
            listOpen: !prevState.listOpen,
        }))
    }

    toggleSelectedItem(item) {
        this.setState({
            listOpen: false
        })
        this.props.toggleItem(item)
    }

    render() {
        const { list, label} = this.props
        const { listOpen, headerTitle } = this.state
        return (
            <div className={css.navBarWrapper}>
            <div id="dropdown-wrapper" className={css.ddWrapper}>
                <div id="dropdown-header" className={css.ddHeader} onClick={() => this.toggleList()}>
                    <div id="dropdown-title" className={css.ddHeaderTitle}>{this.props.label}
                        <div className={css.downArrow}></div>
                    </div>
                </div>
                {listOpen && <ul className={css.ddList}>
                    {list.map((item) => (
                        <li className={css.ddListItem} key={item} onClick={()=>this.toggleSelectedItem(item)}>
                        {item}</li>
                    ))}
                </ul>}
            </div>
            </div>
        )
    }
}

