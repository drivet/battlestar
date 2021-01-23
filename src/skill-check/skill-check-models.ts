// before cards are added to skill check, but after any skill check setup.
enum BeforeSkillCheckId {
    ScientificResearch3,
    ScientificResearch4,
    ScientificResearch5,
    InvestigativeCommittee3,
    InvestigativeCommittee4,
    InvestigativeCommittee5,
    FILP_Increase,
    FILP_Decrease,
    AssignArbitrator_Increase,
    AssignArbitrator_Decrease,
    CylonHatred,
}

// after cards have been totalled
enum AfterSkillCheckTotalId {
    DeclareEmergency3,
    DeclareEmergency4,
    DeclareEmergency5,
}

enum SkillCheckType {
    Administration,
    AdmiralsQuarters,
    Brig,
    Crisis
}

enum SkillCheckResult {
    Unknown,
    Pass,
    Partial,
    Fail
}
