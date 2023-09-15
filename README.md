# code-memoirs-backend


if you want to populate manually the code memoirs db with compass, then add the output of the following command as the connection sstring (mongouri) in compass.

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' db_container
```

use this ip address to connect compass to container's mongo instance.