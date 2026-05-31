
import React from 'react';
import { DollarSign } from 'lucide-react';
import ServicePageLayout from './ServicePageLayout.jsx';

const FundsReleasePage = () => {
  return (
    <ServicePageLayout
      title="Funds Release Assistance"
      description="Strategic appeals to recover disbursements withheld by Amazon after an account deactivation."
      icon={DollarSign}
      path="/services/funds-release"
      overview="When an account is permanently deactivated, Amazon often holds your remaining balance for 90 days or longer to cover A-to-z claims and chargebacks. Afterward, you must pass a stringent compliance review to release the funds. We prepare the documentation required to prove the funds were generated legitimately."
      problemsList={[
        "90-day waiting period expired without release",
        "Amazon suspects funds are tied to inauthentic goods",
        "Dropshipping violations resulting in withheld balances",
        "Unclear instructions from the disbursement team",
        "Rejected funds appeal"
      ]}
      howWeHelpList={[
        { title: "Disbursement Audit", desc: "Reviewing your account ledger to identify the exact withheld amount and reason." },
        { title: "Legitimacy Documentation", desc: "Compiling supplier invoices, delivery proofs, and tracking data to prove orders were fulfilled." },
        { title: "Funds Appeal Drafting", desc: "Writing a specialized appeal targeting the disbursements team, separate from account reinstatement." }
      ]}
      faqs={[
        { q: "When can I apply for a funds release?", a: "Typically, you must wait 90 days after your account deactivation before Amazon's disbursement team will entertain an appeal." },
        { q: "Will Amazon ever keep my money permanently?", a: "If Amazon determines the funds were generated through fraudulent, deceptive, or illegal activity, they reserve the right to withhold them permanently. Proper documentation is required to prevent this." },
        { q: "Can I appeal for funds if I gave up on reinstating the account?", a: "Yes, the funds release appeal is a separate process from account reinstatement." }
      ]}
    />
  );
};

export default FundsReleasePage;
