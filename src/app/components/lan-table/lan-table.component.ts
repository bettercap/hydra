import {Component, OnInit} from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Host } from '../../models/host';

import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

function ipCmp( a, b ) {
    a = a.ipv4.split( '.' );
    b = b.ipv4.split( '.' );
    for( var i = 0; i < a.length; i++ ) {
        if( ( a[i] = parseInt( a[i] ) ) < ( b[i] = parseInt( b[i] ) ) )
            return -1;
        else if( a[i] > b[i] )
            return 1;
    }
    return 0;
}

@Component({
    selector: 'hydra-lan-table',
    templateUrl: './lan-table.component.html',
    styleUrls: ['./lan-table.component.scss']
})
export class LanTableComponent implements OnInit {
    hosts: Host[];
    visibleMeta = {};

    faInfoCircle = faInfoCircle;

    constructor(private api: ApiService) { 
        this.update(this.api.session.lan['hosts']);
    }

    ngOnInit() {
        this.api.onNewData.subscribe(session => {
            this.update(session.lan['hosts']);
        });
    }

    private update(hosts) {
        this.hosts = hosts; 
        this.hosts.sort(ipCmp);
    }
}
