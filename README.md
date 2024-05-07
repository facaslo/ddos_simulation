# DDOS simulation

In this hands-on you will experiment a toy DDoS attack. The idea is to use a tool to flood it with 
packets to make unavailable a web server service. The following steps are a suggestion; 
however, you are free to change the experiment with other services and tools:
1. Install VirtualBox
2. Download Ubuntu 16.04
3. Install Ubuntu as a virtual machine inside VirtualBox or natively in a machine (victim)
4. Make sure that this machine is reachable through an IP address from other machines in 
your LAN
5. Install a web server (for instance, Apache HTTP Sever) in a machine at home (or in the 
cloud services if you have it)
6. Install in another machine (attacker) a DDoS tool such as LOIC: 
https://github.com/NewEraCracker/LOIC
7. Flood the victim with packets using the attacker tool until the service is unavailable. You 
have to verify that legitime requests are not responded by the victim
8. Write a report with the description and screenshots of the performed steps