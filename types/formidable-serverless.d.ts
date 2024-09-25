declare module 'formidable-serverless' {
  export class IncomingForm {
    parse: (req: any, callback: (err: string, fields: any, files: any) => void) => void;
  }
  
  export interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    originalFilename: string;
    filepath: string;
    buffer: any;
  }
  
  export interface Files {
    [key: string]: File | File[];
  }
}
  