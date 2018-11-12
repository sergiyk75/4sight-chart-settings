import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemorySettingsService implements InMemoryDbService {
  createDb() {
    const categories = [
       {
         id: 'components',
         name: '4Sight Components',
         components: [
          {
            name: '4Sight DSE',
            settings: [
              {
                name: 'String Setting 1',
                type: 'string',
                value: 'abc',
                regex: ''
              },
              {
                name: 'Lookup Setting 1',
                type: 'lookup',
                value: 'one',
                lookupValues: ['one', 'two', 'three']
              },
              {
                name: 'Number Setting 2',
                type: 'number',
                min: 1,
                max: 10
              }

            ],
            components: [
              {
                name: 'DSE',
                settings: [
                  {
                    name: 'String Setting 2',
                    type: 'string',
                    value: 'blah',
                    regex: ''
                  },
                ]
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

    return { categories };
  }
}
