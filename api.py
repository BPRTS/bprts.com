import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

client_id = 'c4a5e57f646245f0a8e83a5916a2d9bd'
client_secret = 'e96bd6567a3844e0b869409987585108'

client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

track_uri = 'spotify:track:3LcuxzO1gLRhcRZbZJh0hE'
track = sp.track(track_uri)
num_plays = track['popularity']
print(f"Your song has been played {num_plays} times.")