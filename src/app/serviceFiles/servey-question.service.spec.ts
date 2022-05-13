import { TestBed } from '@angular/core/testing';

import { ServeyQuestionService } from './servey-question.service';

describe('ServeyQuestionService', () => {
  let service: ServeyQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeyQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
