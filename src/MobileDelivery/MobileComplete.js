import React from 'react';
import moment from 'moment';
import './Mobile.css';

class MobileComplete extends React.Component {
    render() { 
        return (
            <div className="mobile-delivery">
                <div className="mobile-header">
                    <p>Schedule | <span id="mobile-header-pickup">Pick-up</span></p>
                </div>
                <div className="mobile-card">
                    <div className="mobile-card-line-gray"></div>
                    <div className="mobile-agenda">
                        <p className="mobile-today">Today's Agenda</p>
                        <p className="mobile-today" id="mobile-day">
                            {moment(this.props.deliveryObj.date).format('L').replace(new RegExp('[^.]?' + moment(this.props.deliveryObj.date).format('YYYY') + '.?'), '')}
                        </p>
                    </div>
                    <div className="mobile-time">
                        <span className="gray-dot"></span>
                        <p id="mobile-time">{moment(this.props.deliveryObj.startTime,'HH:mm').format('LT')} &ndash; {moment(this.props.deliveryObj.endTime, 'HH:mm').format('LT')}</p>
                    </div>
                    <p id="mobile-completed">Pickup Completed</p>
                    <p className="mobile-content-header">Student Deliverers</p>
                    <div className="mobile-deliverers">
                        {
                            // loop through deliverers
                            this.props.deliveryObj.delivererGroup.deliverers.map((deliverer, i) => {
                                return (
                                    <div className="mobile-student-info" id={i} key={i}>
                                        <p id="mobile-name">{deliverer.name}</p>
                                        {/* TODO: Query for DelivererGroup name (currently uid)*/}
                                        <p id="mobile-org">{this.props.deliveryObj.delivererGroup.group}</p>
                                        <a href={'tel:' + deliverer.phone}>{deliverer.phone}</a>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className="mobile-to-from">
                        <div id="mobile-da">
                            <p className="mobile-content-header">Pick Up From</p>
                            <p id="mobile-name">{this.props.da.agency}</p>
                            <p id="mobile-org">{this.props.da.primaryContact.name}</p>
                            <a href={'tel:' + this.props.da.primaryContact.phone}>{this.props.da.primaryContact.phone}</a>
                        </div>
                        <div id="mobile-ra">
                            <p className="mobile-content-header">Pick Up From</p>
                            <p id="mobile-name">{this.props.ra.agency}</p>
                            <p id="mobile-org">{this.props.ra.primaryContact.name}</p>
                            <a href={'tel:' + this.props.ra.primaryContact.phone}>{this.props.ra.primaryContact.phone}</a>
                        </div>
                    </div>
                    
                    <input defaultValue="Completed" id="mobile-completed-btn"/> 
                </div>
            </div>
        );
    }
}

export default MobileComplete;