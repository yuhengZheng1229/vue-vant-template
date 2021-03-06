const user = [{
  url: '/user/get',
  type: 'post',
  response: _ => {
    return {
      'code': 0,
      'info': '操作成功',
      'data': {
        'id': 1,
        'name': 'Jackie',
        'email': 'JackieCheung517@gmail.com'
      }
    }
  }
}, {
  url: '/user/login',
  type: 'post',
  response: _ => {
    return {
      'code': 0,
      'info': '操作成功',
      'data': {
        'access_token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6WyJvYXV0aDItcmVzb3VyY2UiXSwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MjE2NTAxNzczNywiYXV0aG9yaXRpZXMiOlsi57yW6L6R6I-c5Y2VIiwi5paH56ug54q25oCBIiwi6I-c5Y2V566h55CGIiwi5pWw5o2u5bqT566h55CGIiwi57yW6L6R5Lya5ZGYIiwi5re75Yqg5bm_5ZGK5L2NIiwi5Lya5ZGY5YiX6KGoIiwi55So5oi3566h55CGIiwi5re75Yqg55So5oi3Iiwi5LyY5YyW6KGoIiwi5Yig6Zmk5Lya5ZGY57uEIiwi55So5oi354q25oCBIiwi5p2D6ZmQ5YiG6YWNIiwi5ZOB54mM5YiG57G7Iiwi56S65L6LIiwi5Y-R6YCB55-t5L-hIiwi5Lqn5ZOB5YiX6KGoIiwi5Yig6Zmk6I-c5Y2VIiwi5bm_5ZGK5YiX6KGoIiwi6KGM5Li65pel5b-XIiwi5L-d5a2Y6YWN572uIiwi5YiG57G754q25oCBIiwi5Yig6Zmk5bm_5ZGK5L2NIiwi5bm_5ZGK5L2N54q25oCBIiwi5bm_5ZGK566h55CGIiwi5re75Yqg5bm_5ZGKIiwi5ZOB54mM566h55CGIiwiUk9MRV_otoXnuqfnrqHnkIblkZgiLCLkvJrlkZjnu4QiLCLliKDpmaTop5LoibIiLCLnvJbovpHkvJrlkZjnu4QiLCLmt7vliqDmlofnq6AiLCLliKDpmaTml6Xlv5ciLCLoj5zljZXmjpLluo8iLCLmt7vliqDliIbnsbsiLCLphY3nva7liJfooagiLCLkvJrlkZjnirbmgIEiLCLlub_lkYrnirbmgIEiLCLliKDpmaTnlKjmiLciLCLmlbDmja7lupPov5jljp8iLCLnvJbovpHlub_lkYoiLCLovabmupDkuqflk4HnrqHnkIYiLCLliKDpmaQiLCLmlofnq6DliIbnsbsiLCLliKDpmaTkvJrlkZgiLCLmlofnq6DliJfooagiLCLovablnovliJfooagiLCLov5jljp8iLCLnvJbovpHmlofnq6AiLCLnvJbovpHliIbnsbsiLCLnu4TlkIjkuqflk4EiLCLkv67lpI3ooagiLCLml6Xlv5fnrqHnkIYiLCLmt7vliqDop5LoibIiLCLkvJrlkZjnu4TnirbmgIEiLCLnvJbovpHnlKjmiLciLCLnvJbovpHlub_lkYrkvY0iLCLkvpvlupTpk77ph5Hono0iLCLliKDpmaTliIbnsbsiLCLliKDpmaTmlofnq6AiLCLlub_lkYrkvY0iLCLns7vnu5_nrqHnkIYiLCLoj5zljZXnirbmgIEiLCLmt7vliqDkvJrlkZjnu4QiLCLop5LoibLnirbmgIEiLCJST0xFX0FETUlOIiwi5Yig6Zmk5bm_5ZGKIiwi5pWw5o2u5bqT5aSH5Lu9Iiwi6KeS6Imy566h55CGIiwi5re75Yqg6I-c5Y2VIiwi6YWN572u566h55CGIiwi5re75Yqg5Lya5ZGYIl0sImp0aSI6ImI1YTUxZjA5LTgxZTQtNDVjYy05MGI1LTEyZjM3Y2UzNjkxOSIsImNsaWVudF9pZCI6ImxvY2FsZGV2In0.RPpZ-fBJWWvnzRLMgjHXkfGlwfUndXHIqqjtiKjBPeEMNzwXJddlJOz4TUhx6gjHcjATgTIANyDtzT2GlJ_9r5z9SVBigHm3Rh0zMGgA9Ea7tisp3hjd1XGU_9yPQcENshZdi3S2I0cZk2SkGXQCAO2bvPui2rKAtXvgc46H0QM4NMeB4oQvwyB6Ji6B_e8AdFEjwCkErM0wnu3MbWlnblp7o6LoVYt0QplFuVHjhzqlSijl0cTPUUWbEJWaVVBKrNVD1I2aNy1AY_WMvth6zERMPne8cUzldG8zJaRomJ9jDF5usqWTz7GqAq4n3GeualaSCLFc1_1kJr0Nc5Eceg',
        'token_type': 'bearer',
        'refresh_token': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImF1ZCI6WyJvYXV0aDItcmVzb3VyY2UiXSwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImF0aSI6ImI1YTUxZjA5LTgxZTQtNDVjYy05MGI1LTEyZjM3Y2UzNjkxOSIsImV4cCI6MjE2NTAxNzczNywiYXV0aG9yaXRpZXMiOlsi57yW6L6R6I-c5Y2VIiwi5paH56ug54q25oCBIiwi6I-c5Y2V566h55CGIiwi5pWw5o2u5bqT566h55CGIiwi57yW6L6R5Lya5ZGYIiwi5re75Yqg5bm_5ZGK5L2NIiwi5Lya5ZGY5YiX6KGoIiwi55So5oi3566h55CGIiwi5re75Yqg55So5oi3Iiwi5LyY5YyW6KGoIiwi5Yig6Zmk5Lya5ZGY57uEIiwi55So5oi354q25oCBIiwi5p2D6ZmQ5YiG6YWNIiwi5ZOB54mM5YiG57G7Iiwi56S65L6LIiwi5Y-R6YCB55-t5L-hIiwi5Lqn5ZOB5YiX6KGoIiwi5Yig6Zmk6I-c5Y2VIiwi5bm_5ZGK5YiX6KGoIiwi6KGM5Li65pel5b-XIiwi5L-d5a2Y6YWN572uIiwi5YiG57G754q25oCBIiwi5Yig6Zmk5bm_5ZGK5L2NIiwi5bm_5ZGK5L2N54q25oCBIiwi5bm_5ZGK566h55CGIiwi5re75Yqg5bm_5ZGKIiwi5ZOB54mM566h55CGIiwiUk9MRV_otoXnuqfnrqHnkIblkZgiLCLkvJrlkZjnu4QiLCLliKDpmaTop5LoibIiLCLnvJbovpHkvJrlkZjnu4QiLCLmt7vliqDmlofnq6AiLCLliKDpmaTml6Xlv5ciLCLoj5zljZXmjpLluo8iLCLmt7vliqDliIbnsbsiLCLphY3nva7liJfooagiLCLkvJrlkZjnirbmgIEiLCLlub_lkYrnirbmgIEiLCLliKDpmaTnlKjmiLciLCLmlbDmja7lupPov5jljp8iLCLnvJbovpHlub_lkYoiLCLovabmupDkuqflk4HnrqHnkIYiLCLliKDpmaQiLCLmlofnq6DliIbnsbsiLCLliKDpmaTkvJrlkZgiLCLmlofnq6DliJfooagiLCLovablnovliJfooagiLCLov5jljp8iLCLnvJbovpHmlofnq6AiLCLnvJbovpHliIbnsbsiLCLnu4TlkIjkuqflk4EiLCLkv67lpI3ooagiLCLml6Xlv5fnrqHnkIYiLCLmt7vliqDop5LoibIiLCLkvJrlkZjnu4TnirbmgIEiLCLnvJbovpHnlKjmiLciLCLnvJbovpHlub_lkYrkvY0iLCLkvpvlupTpk77ph5Hono0iLCLliKDpmaTliIbnsbsiLCLliKDpmaTmlofnq6AiLCLlub_lkYrkvY0iLCLns7vnu5_nrqHnkIYiLCLoj5zljZXnirbmgIEiLCLmt7vliqDkvJrlkZjnu4QiLCLop5LoibLnirbmgIEiLCJST0xFX0FETUlOIiwi5Yig6Zmk5bm_5ZGKIiwi5pWw5o2u5bqT5aSH5Lu9Iiwi6KeS6Imy566h55CGIiwi5re75Yqg6I-c5Y2VIiwi6YWN572u566h55CGIiwi5re75Yqg5Lya5ZGYIl0sImp0aSI6IjdkNjkyY2MyLWY1M2ItNDZkNy1iNDAyLTBiNmU3NzRhYTcxMiIsImNsaWVudF9pZCI6ImxvY2FsZGV2In0.JSzIxeC39pJ4QAGd5CKW18sBV7kZGI9euq6R-EctCK2qQb4eKY783sZpjmvxQ0dyE0iE6QSu_PjxJVECrvkDJ5Gt9wKwCC2Zb3OUcKZxJSOsD73F3PvvnLhGGwb9-4HlgvoiO5ezWxUFbm3ojZaD72UrzldT3z2JgZItirYOEJFvBcw-tnh1QKA_biGs1tw8nUzjtehMhTwXvaPYWPUyaKfTc6FJACbzKlaixteFnqBFxDYuJLxDJZ1GdefxHKIDJoxae_-DD1SbuEveHqTxCs0mDmfR65n3u7eZrN9DxgVv0CkeWdU-GjimWUXs-1eTkvyHtUmLoH3ysSj85vk4QA',
        'expires_in': 599999999,
        'scope': 'read write',
        'jti': 'b5a51f09-81e4-45cc-90b5-12f37ce36919'
      }
    }
  }
}]

export default user
