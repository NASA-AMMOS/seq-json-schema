# Multi-Mission Sequence Language Specifications Project Governance

This project aims to create an open source community that encourages transparency, contributions, and collaboration, but maintains sound technical and quality standards. Our goal is to build a community comprised of members across the space community and beyond, including from private organizations, universities, Federally Funded Research and Development Centers (FFRDCs), other government organizations, and international organizations.

This community follows a fairly liberal contribution model where people and/or organizations who do the most work will have the most influence on project direction. Technical decision-making will primarily be made through a "[consensus-seeking](https://en.wikipedia.org/wiki/Consensus-seeking_decision-making)" approach.

## Roles

### User

Operators who have authored, reviewed, or written tools that use sequence specifications under the scope of this project. These specifications were primarily designed for space missions, but let us know if you've found other uses for them.

### Contributor

Contributors include anyone that provides input to the project. This includes code updates, issues, documentation, graphics, designs, or anything else that tangibly improves the project.

### Collaborator

Subset of contributors who have been given write access to one or more of the repositories under the scope of this project. Both contributors and collaborators can propose changes to the project via pull requests, but only collaborators can review these requests. Any contributor who has made a non-trivial contribution should be on-boarded as a collaborator in a timely manner.

If you are planning on making a substantial contribution or would like to propose a change to our specifications, please follow the [Specification Change Request Process](#specification-change-request-process) below.

## Project Management Committee

The Project Management Committee (PMC) is made up of sponsor organization representatives (i.e. those providing funding to the project) and key stakeholders who rely or plan to rely on the sequence specifications under the scope of this project. 
The PMC has the following primary responsibilities

- Responding to specification change requests and approving specification changes
- Maintaining roadmap for upcoming and potential future specification changes
- Assessing available resources and allocating them to make specification and documentation changes
- On-boarding new sponsors and/or stakeholders
- Overall project governance (including this policy)
- Maintaining the list of collaborators
- Contribution policy

### PMC Committee Members

- The current PMC members are the members of the [NASA-AMMOS seq-schemas-pmc team](https://github.com/orgs/NASA-AMMOS/teams/seq-schemas-pmc/members)

### Scope

The PMC has management authority over the following repos and specifications within:
- https://github.com/NASA-AMMOS/seq-json-schema

The PMC also has responsibility over the sequencing specification documentation within https://github.com/NASA-AMMOS/aerie-docs

### PMC Governance

The PMC shall self-select a chair to lead and organize the committee. A new chair shall be selected yearly to distribute leadership responsibility across stakeholders.

The PMC chair or their delegate (who must also be a PMC member) shall:

- Shepherd change requests to the controlled specifications through disposition and implementation
- Schedule ad hoc meetings to discuss change requests or issues to get PMC consensus when necessary 
- Hold quarterly meetings open to the community to provide status on recent updates and/or change requests, get community input on how specifications are being used, and receive feedback on how to improve them. 
- On-board new PMC members when appropriate (e.g. new stakeholder, change in organization/mission representative)
- Initiate PMC chair transition
- Review and approve issues and pull requests which do not require PMC consensus

### Specification Change Request Process

If you have a proposed change to one of the specifications under the scope of this project, submit an issue to the GitHub repository which contains that specification.

The PMC chair or their delegate will review the submission. If the change request affects the specification, the chair will request stakeholder input from the PMC to either design a new solution, mature a proposed solution, or find a disapproving consensus. If a mature solution is achieved, the PMC chair will assign an implementer: either the submitter, or, if the submitter does not have the resources to implement the requested change, another contributor identified by the PMC chair. 

Once implementation is complete, the implementer will submit a pull request and reference the original issue within that request. PMC members representing all stakeholder missions and sponsor organizations shall engage to approve, disapprove, or request additional clarification from the submitter and/or implementer. The PMC chair will work with the PMC, submitter, and implementer until an approval or disapproval consensus can be determined. Approval consensus may comprise pull request approvals by at least one representative from each stakeholder mission and sponsor organization or by note from the PMC chair following other equivalent discussion/communication.

If the pull request receives approval consensus, the chair will note this as a comment on the pull request and merge the change. The PMC chair should note impacts of the change based on input from the PMC on the pull request, and any impacts should also be included in the following release documentation.

If, at any point, disapproval consensus is achieved, the PMC chair shall note this as a comment with rationale from the PMC on the most recent submission on the topic (either issue or pull request) and close all open issues/pull requests.

If, at any point, a PMC member(s) dissents from PMC consensus, they are encouraged to document their dissent in appropriate detail as a comment on the relevant submission.

## Acknowledgements

Much of this governance model was adapted from the other notable open source projects including [node.js](https://github.com/nodejs/node/blob/main/GOVERNANCE.md), [OpenSSL](https://www.openssl.org/policies/omc-bylaws.html), [PostgresQL](https://www.postgresql.org/developer/), and [OpenMCT](https://github.com/nasa/openmct/blob/master/CONTRIBUTING.md)
