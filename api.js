export const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3NGQ1ZGY2OC1mZWYwLTRiY2UtOTNjNS0wZTA2NWMzMTkyMjUiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTY2NjY0NTY2OSwiZXhwIjoxNjY3MjUwNDY5fQ.yGDyGDu3wEvDp3pQjy1ZGGjBSKxhYmmQwliNUzFxf4k';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch('https://api.videosdk.live/v1/meetings', {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({region: 'sg001'}),
  });

  const {meetingId} = await res.json();
  return meetingId;
};
