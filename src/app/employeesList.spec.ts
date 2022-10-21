import { TestBed } from '@angular/core/testing';
import { EmployeesList } from './employeesList';

describe('EmployeesList', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EmployeesList
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmployeesList);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'employees-front-end'`, () => {
    const fixture = TestBed.createComponent(EmployeesList);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('employees-front-end');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EmployeesList);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('employees-front-end app is running!');
  });
});
