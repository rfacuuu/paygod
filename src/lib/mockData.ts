export type TransferStatus = "approved" | "pending" | "flagged";

export interface MockTransfer {
  id: string;
  amount: string;
  recipient: string;
  status: TransferStatus;
  timestamp: string;
}

export const MOCK_TRANSFERS: MockTransfer[] = [
  { id: "0x9f3a...7c2d", amount: "••••• DoC", recipient: "0x8b21...d4F9", status: "approved", timestamp: "May 20, 2025 14:32:11" },
  { id: "0x7c1e...3a9b", amount: "••••• DoC", recipient: "0x21d9...a8E1", status: "pending",  timestamp: "May 20, 2025 13:45:02" },
  { id: "0x5b8d...9e11", amount: "••••• DoC", recipient: "0xF78a...8c31", status: "approved", timestamp: "May 20, 2025 12:18:33" },
  { id: "0x2d4f...6b8a", amount: "••••• DoC", recipient: "0x3cA1...9d72", status: "flagged",  timestamp: "May 20, 2025 11:07:21" },
  { id: "0x1a2b...4c5d", amount: "••••• DoC", recipient: "0x9E0f...7a11", status: "approved", timestamp: "May 20, 2025 10:22:09" },
  { id: "0x8e7d...1f90", amount: "••••• DoC", recipient: "0xA3c2...2b44", status: "approved", timestamp: "May 20, 2025 09:15:44" },
  { id: "0x6a3c...8b71", amount: "••••• DoC", recipient: "0xD91f...cc02", status: "pending",  timestamp: "May 20, 2025 08:41:18" },
  { id: "0x4e8b...2d33", amount: "••••• DoC", recipient: "0x77Ab...e831", status: "approved", timestamp: "May 20, 2025 07:33:29" },
  { id: "0x3f2a...9d44", amount: "••••• DoC", recipient: "0xB02d...f119", status: "flagged",  timestamp: "May 20, 2025 06:12:07" },
  { id: "0x7b9c...0a55", amount: "••••• DoC", recipient: "0xC441...9923", status: "approved", timestamp: "May 20, 2025 05:01:53" },
];

export const MOCK_STATS = {
  totalVolume: "1,248,392.75",
  pendingTransfers: 23,
  pendingRequireAttention: 2,
  complianceScore: 94,
  complianceLabel: "Excellent",
  volumeChange: "+18.7% vs last 30 days",
};
