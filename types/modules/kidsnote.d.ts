declare namespace Kidsnote {
  type ContentType = 'notes' | 'album';

  type Day = {
    contentType: string;
    today: [string, string, string];
  };

  type Comment = {
    author: string;
    text: string;
    date: string;
  };
}
