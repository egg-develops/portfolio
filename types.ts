
export interface Project {
  id: string;
  name: string;
  category: string;
  highlights: string[];
  description: string;
  tags: string[];
  stats?: string;
}

export interface Milestone {
  year: string;
  description: string;
}

export interface MartechGroup {
  category: string;
  tools: string[];
}
