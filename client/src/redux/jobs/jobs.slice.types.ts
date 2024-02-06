// Type definitions for the jobs slice
export interface Job {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  company: Company;
  salary: number;
  location: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  website: string;
  foundedYear: number;
  employees: number;
  createdAt: string;
  updatedAt: string;
}

export interface JobFilter {
  search: string;
}

export interface JobsState {
  list: Job[];
  filter: JobFilter;
}
