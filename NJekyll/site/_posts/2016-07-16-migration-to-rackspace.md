---
layout: post
title: Migrating build environment to RackSpace
---

Dear customers,

We have great news! Today we moved all open-source and most private accounts to a new build environment hosted at RackSpace.

For open-source projects that means their builds will start and run faster and private projects may notice better performance as well. 

Virtual machines in the new environment have 2 CPU cores and up to 4 GB of RAM. The new public IP address for that environment is `74.205.54.20` - you may need to update your firewalls.

We are still going to maintain Google Compute Engine (GCE) environment for selected accounts and as a backup build cloud.
If your private builds were previously running on GCE they will remain there.

Some open-source projects may experience issues while building on a new environment.
Due to implementation differences between GCE and Hyper-V platforms we have separate build worker images for GCE and Hyper-V environments, so there might be minor discrepancies in installed software.
Please report any issues you notice - your help with fixing those issues is much appreciated.

We have a good reason for this move as some customers already reported 10x performance increase!

We would love to hear your feedback!

Best regards,<br>
AppVeyor team

Follow us on Twitter: [@appveyor](https://twitter.com/appveyor)