import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemorySettingsService implements InMemoryDbService {
  createDb() 
  { 
    let settings = [
       { 
         id: 'components',
         name: '4Sight Components',
         components: [
          {
            name: '4Sight DSE',
            settings: [
              {
                name: 'String Setting',
                type: 'string',
                value: 'abc',
                regex: ''
              },
              {
                name: 'Lookup Setting',
                type: 'lookup',
                value: 'one',
                values: ['one','two','three']
              },
              {
                name: 'Number Setting',
                type: 'number',
                min: 1,
                max: 10
              }
  
            ],
            components: [
              {
                name: 'DSE',
                settings: []
              },
              {
                name: 'DSE Monitor',
                settings: []
              }
            ]
          },
          {
            name: '4Sight Kafka',
            settings: [],
            components: [
              {
                name: 'Kafka',
                settings: []
              },
              {
                name: 'Kafka Monitor',
                settings: []
              }
            ]
          },
          {
            name: 'Zookeeper',
            settings: []
          }
        ]
      },
      {
        id: 'apps',
        name: '4Sight Apps',
        components: [
          {
            name: '4Sight Backup',
            settings: []
          },
          {
            name: '4Sight Purge',
            settings: []
          }
        ]
      }
    ];

    return { settings }
  }
}
